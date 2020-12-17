import { Injector } from "www/injector";

class Counter {
  private count = 0;

  increment() {
    this.count++;
  }

  get() {
    return this.count;
  }
}

class CounterMock extends Counter {
  get() {
    return 3;
  }
}

class MaxOccupancy {
  private counter: Counter;

  constructor(injector: Injector) {
    this.counter = injector.get(Counter);
  }

  isReached() {
    return this.counter.get() > 2;
  }
}

test("Inject one symbol", () => {
  const injector = new Injector();
  injector.register(Counter);
  const counter = injector.get(Counter);
  counter.increment();
  expect(counter.get()).toEqual(1);
});

test("Mock one symbol", () => {
  const injector = new Injector();
  injector.register(Counter);
  injector.register(Counter, CounterMock);
  const counter = injector.get(Counter);
  counter.increment();
  expect(counter.get()).toEqual(3);
});

test("Inject the injector", () => {
  const injector = new Injector();
  injector.register(Counter);
  injector.register(MaxOccupancy);
  const maxOccupancy = injector.get(MaxOccupancy);
  expect(maxOccupancy.isReached()).toEqual(false);
});

test("Do not instance twice", () => {
  const injector = new Injector();
  injector.register(Counter);
  const counterA = injector.get(Counter);
  const counterB = injector.get(Counter);
  counterA.increment();
  expect(counterA.get()).toEqual(1);
  expect(counterB.get()).toEqual(1);
  expect(counterA).toBe(counterB);
});

class Value {
  n: number = 0;
}
function makeValue(n: number): new () => Value {
  return class extends Value {
    n: number = n;
  };
}

test("Inject a list", () => {
  const injector = new Injector();
  injector.register(Value, makeValue(1));
  injector.register(Value, makeValue(2));
  injector.register(Value, makeValue(3));

  const values = injector.list(Value);
  expect(values).toMatchObject([{ n: 1 }, { n: 2 }, { n: 3 }]);
});

test("Do not instance the same list twice", () => {
  const injector = new Injector();
  injector.register(Value, makeValue(1));
  injector.register(Value, makeValue(2));
  injector.register(Value, makeValue(3));

  const values1 = injector.list(Value);
  const values2 = injector.list(Value);
  expect(values1).toBe(values2);
});

test("Configures the injector", () => {
  let foundInjector;
  const injector = new Injector();
  const result = injector.configure(function (configuringInjector) {
    configuringInjector.register(Counter);
    foundInjector = configuringInjector;
  });

  const counter = injector.get(Counter);

  expect(counter.get()).toBe(0);
  expect(foundInjector).toBe(injector);
  expect(result).toBe(injector);
});

test("Manually set a value", () => {
  const myCounter = new Counter();
  const injector = new Injector();
  injector.set(Counter, myCounter);

  const counter = injector.get(Counter);
  expect(counter).toBe(myCounter);
});

test("Throws a comprehensible exception when trying to get a symbol without register", () => {
  const injector = new Injector();

  expect(() => injector.get(Counter)).toThrow(/No Counter registered/);
});

test("The same type can satisfy two injections but it is instantiated once", () => {
  class A {
    a() {}
  }
  class B {
    b() {}
  }
  class C implements A, B {
    a() {}
    b() {}
    c() {}
  }

  const injector = new Injector();
  injector.register(A, C);
  injector.register(B, C);
  injector.register(C, C);

  const a = injector.get(A);
  const b = injector.get(B);
  const c = injector.get(C);

  expect(a).toBe(b);
  expect(a).toBe(c);
});
