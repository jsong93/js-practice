(() => {
  function mixin(sourceObj, targetObj) {
    for (const key in sourceObj) {
      if (!(key in targetObj)) {
        targetObj[key] = sourceObj[key];
      }
    }
    return targetObj;
  }

  var Vehicle = {
    engines: 1,
    ignition: function() {
      console.log('turning on my engine');
    },
    drive: function() {
      this.ignition();
      console.log('steeting an moving forwarad');
    }
  };

  var Car = mixin(Vehicle, {
    wheels: 4,
    dirve: function() {
      Vehicle.drive.call(this);
      console.log(`rolling on all ${this.wheels} wheels`);
    }
  });

  //   Vehicle.ignition = function() {
  //     console.log('update');
  //   };

  //   var vehicle = new Vehicle();
  //   vehicle.ignition();
  //   vehicle.dirve();

  //   var car = new Car();
  //   car.ignition();
  //   car.drive();
  Vehicle.ignition.a = 1;
  Car.dirve();
  console.log(Car.ignition.a);
})();

(() => {
  function foo() {
    console.log('before');
  }
  var obj = {
    foo
  };

  obj.foo();

  foo.a = 1;
  obj.foo();
  console.log(obj.foo.a);
})();

(() => {
  function foo() {
    var a = 2;
    return a;
  }

  var bar = new foo();

  console.log(bar);
})();

(() => {
  function Vehicle() {
    this.engines = 1;
  }
  Vehicle.prototype.ignition = function() {
    console.log('Turning on my engine');
  };
  Vehicle.prototype.drive = function() {
    this.ignition();
    console.log('Steering and moving forward');
  };

  // 寄生类 Car
  function Car() {
    var car = new Vehicle();
    car.wheels = 4;

    // 保存Vehile drive
    var vehDrive = car.drive;

    car.drive = function() {
      vehDrive.call(this);
      console.log(`Rollong on all ${this.wheels} wheels`);
    };

    return car;
  }

  var myCar = new Car();
  myCar.drive();

  var myCar2 = Car();
  myCar2.drive();
})();

(() => {
  var Something = {
      cool: function() {
        this.greeting = 'hello world';
        this.count = this.count ? this.count + 1 : 1;
      }
    },
    Another = {
      cool: function() {
        Something.cool.call(this);
      }
    };
  Something.cool();
  console.log(Something.greeting);
  console.log(Something.count);

  Another.cool();
  console.log(Another.greeting);
  console.log(Another.count);
})();
