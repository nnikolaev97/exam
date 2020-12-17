export class Injector {
  private symbols: Map<any, any[]> = new Map();
  private instances: Map<any, any> = new Map();
  private values: Map<any, any> = new Map();

  register<T>(
    Type: new (injector: Injector) => T,
    Constructor?: new (injector: Injector) => T
  ) {
    if (!this.symbols.has(Type)) {
      this.symbols.set(Type, []);
    }

    this.symbols.get(Type)?.push(Constructor || Type);
  }

  set<T>(Type: new (...x: any[]) => T, value: T) {
    this.values.set(Type, value);
  }

  get<T>(Type: new (...x: any[]) => T): T {
    if (!this.values.has(Type)) {
      const list = this.symbols.get(Type);
      if (!list)
        throw new Error(
          `No ${Type.name} registered in the injector. Please, make sure that you register it or you have configured its package.`
        );

      const Constructor = list[list.length - 1];
      const value = this.instance(Constructor);
      this.values.set(Type, value);
    }

    return this.values.get(Type);
  }

  list<T>(Type: new (...x: any[]) => T): T[] {
    if (!this.values.has(Type)) {
      const list = this.symbols.get(Type) || [];
      const values = list.map((C) => this.instance(C));
      this.values.set(Type, values);
    }

    return this.values.get(Type);
  }

  configure(configurer: (injector: Injector) => void): Injector {
    configurer(this);
    return this;
  }

  private instance<T>(Constructor: new (...x: any[]) => T): T {
    if (!this.instances.has(Constructor)) {
      const value = new Constructor(this);
      this.instances.set(Constructor, value);
    }

    return this.instances.get(Constructor);
  }
}
