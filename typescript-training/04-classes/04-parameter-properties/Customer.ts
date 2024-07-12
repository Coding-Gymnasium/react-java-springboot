class Customer2 {
  constructor(
    private _firstName: string,
    private _lastName: string,
  ) {}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

// let's create an instance
let myCustomer2 = new Customer2("Martin", "Dixon");

myCustomer2.firstName = "Susan";
myCustomer2.lastName = "Public";

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);

// For it to compile with this syntax we have to provide the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts
