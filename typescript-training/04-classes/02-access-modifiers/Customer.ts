class Customer1 {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

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
let myCustomer1 = new Customer1("Martin", "Dixon");

myCustomer1.firstName = "Susan";
myCustomer1.lastName = "Public";

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);

// For it to compile with this syntax we have to provide the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts
