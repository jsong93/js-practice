const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.minute-hand');
const hrHand = document.querySelector('.hour-hand');

class Clock {
  constructor(date) {
    this.seconds = date.getSeconds();  
    this.minutes = date.getMinutes();  
    this.hours = date.getHours();  
  }
  
  degrees(unit) {
    if(unit === 'sec') {
        return this.seconds * 6;    
    } else if(unit === 'min') {
        console.log(this.minutes);
        return this.minutes * 6;
    } else {
        return ((this.hours * 60) + this.minutes) * .5;
    }   
  }
  
  initialize(sec,min,hrs) {
    secHand.style.transform = `translateX(-50%) rotate(${sec}deg)`;
    minHand.style.transform = `translateX(-50%) rotate(${min}deg)`;
    hrHand.style.transform = `translateX(-50%) rotate(${hrs}deg)`;
  }
  
  restartSecond() {
    secHand.style.animation = `tickRestart 60s linear infinite`;
  }
  
  restartMinute() {
    minHand.style.animation = `tickRestart 3600s linear infinite`;
  }
  
  restartHour() {
    hourHand.style.animation = `tickRestart 43200s linear infinite`;
  }
  
  tick() {
    const secondsLeft = 60 - this.seconds;
    const minutesLeft = (60 - this.minutes) * 60;
    const hoursLeft = (24 - this.hours) * 3600;
    
    secHand.style.animation = `tickThrough ${secondsLeft}s linear infinite`;
    secHand.addEventListener('animationiteration',() => {
      this.restartSecond();
    });
    
    minHand.style.animation = `tickThrough ${minutesLeft}s linear infinite`;
    minHand.addEventListener('animationiteration',() => {
      this.restartMinute();
    });
    
    hrHand.style.animation = `tickThrough ${hoursLeft}s linear infinite`;
    minHand.addEventListener('animationiteration',() => {
      this.restartMinute();
    });
    
  }
  
  set() {
    this.initialize(this.degrees('sec'),this.degrees('min'),this.degrees('hrs'));
    this.tick();
  }
  
}

/* Create a new Clock Object */
const clock = new Clock(new Date());
/* Initially set the clock */
clock.set();







