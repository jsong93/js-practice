import _ from 'lodash';
// import { MntrCurrentDimension } from './mntr-current-dimension';

/*
 * @Description: 注册中心
 * @Author: jsong
 * @LastEditors: jsong
 * @Date: 2019-04-12 08:58:30
 * @LastEditTime: 2019-04-14 10:36:07
 */
export class MntrPublish {
  //   topics: {};
  //   uid = -1;
  //   dashBoardDimension: MntrCurrentDimension;

  constructor() {
    this.topics = {};
    this.uid = -1;
  }

  subscribe(event, func) {
    if (!this.topics[event]) {
      this.topics[event] = [];
    }
    this.topics[event].push({ token: ++this.uid, func: func });
  }

  publish(event, args = null, emit = false) {
    if (!this.topics[event]) {
      return false;
    }
    const subscribers = this.topics[event];
    if (emit) {
      subscribers[0].func(args, event);
      return;
    }
    let len = subscribers ? subscribers.length : 0;
    while (len--) {
      subscribers[len].func(args, event);
    }
  }

  unsubscribe(token) {
    for (const t in this.topics) {
      if (this.topics[t]) {
        _.pull(this.topics[t], ['tocken', token]);
      }
    }
  }

  //   set(dashBoardDimension: MntrCurrentDimension) {
  //     this.dashBoardDimension = dashBoardDimension;
  //     return this;
  //   }
}

const publish = new MntrPublish();

publish.subscribe('event', () => console.log(' subscribe event '));

publish.publish('event');
