export class BeforePostTest {
  beforePostTest() {
    throw new Error("Cannot call an abstract method");
  }
}
