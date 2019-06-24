class Clock {
    constructor(settings) {
      Object.assign(this, {
        radius: 100,
        globalPosition: { x: 0, y: 0 },
        ...settings
      })
      
      this.numItems = 12
      this.slice = TWO_PI/this.numItems
      this.setInitialPositions()
    }
    
    draw() {
      this.drawClock()
    }
    
    update(position) {
      this.globalPosition = position
      this.updateItemsPosition()
    }
    
    setInitialPositions() {
      this.numberListPositions = this.getNumbersListPositions(this.initPosition)
      this.handsInfo = this.getHandsInfo(this.initPosition)
    }
    
    getNumbersListPositions({ x, y }) {
      const itemsList = []
      
      for (let i = 0; i < this.numItems; i++) {
        itemsList.push({ x, y })
      }
      
      return itemsList
    }
    
    getHandsInfo({ x, y }) {
      return [
        { // hour hand
          x, y, 
          length: this.radius * 0.6,
          weight: 3
        },
        { // minute hand
          x, y, 
          length: this.radius * 0.8,
          weight: 3
        },
        { // second hand
          x, y, 
          length: this.radius * 0.8,
          weight: 1
        },
      ]
    }
    
    updateItemsPosition() {
      const { x, y } = this.globalPosition
      const timeline = new TimelineMax()
      
      timeline
        .staggerTo(this.numberListPositions, 1, {
          x, y,
          ease: 'Expo.easeOut'
        }, 0.05)
        .staggerTo(this.handsInfo, 1, {
          x, y,
          ease: 'Expo.easeOut'
        }, 0.08, '-=1.5')
    }
    
    drawClock() {
      this.drawNumbersRing()
      this.drawClockHands()
      
      const { x, y } = this.globalPosition
      fill(0)
      ellipse(x, y, 10)
    }
    
    drawClockHand(length, weight, x, y, angle) {
      strokeWeight(weight)
      line(x, y, 
        x + cos(angle) * length, 
        y + sin(angle) * length
      )
    }
    
    drawNumbersRing() {
      const { x, y } = this.globalPosition
      const offsetNumbers = HALF_PI - ((TWO_PI/360) * (360/12))
      textAlign(CENTER, CENTER)
      textSize(20)
      for (let i = 0; i < this.numberListPositions.length; i++) {
        text(
          (i % 12) + 1,
          this.numberListPositions[i].x + Math.cos(this.slice * i - offsetNumbers) * this.radius,
          this.numberListPositions[i].y + Math.sin(this.slice * i - offsetNumbers) * this.radius,
        )
      }
    }
    
    drawClockHands() {
      const timeAngles = [
        map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI*2) - HALF_PI, // hour
        map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI, // minute
        map(second(), 0, 60, 0, TWO_PI) - HALF_PI, // seconds
      ]
      
      for (let i = 0; i < timeAngles.length; i++) {
        const { length, weight, x, y } = this.handsInfo[i]
        this.drawClockHand(length, weight, x, y, timeAngles[i])
      }
    }
  }
  
  /* p5.js stuff --------------------------------------------- */
  
  let ring = null
  
  function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    clock = new Clock({
      initPosition: {
        x: width/2,
        y: height/2
      }
    })
  }
  
  function draw() {
    background(255);
    fill(255, 130, 56)
    clock.draw()
  }
  
  function mouseMoved() {
    clock.update({x: mouseX, y: mouseY})
  }