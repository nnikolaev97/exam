export class AfterPostTest {
  afterPostTest() {
    throw new Error("Cannot call an abstract method");
  }
}
