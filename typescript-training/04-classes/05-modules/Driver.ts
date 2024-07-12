import Customer3 from "./Customer";
// let's create an instance
let myCustomer3 = new Customer3("Martin", "Dixon");

myCustomer3.firstName = "Susan";
myCustomer3.lastName = "Public";

console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);

// For it to compile with this syntax we have to provide the flag --target ES5
// tsc --target ES5 --noEmitOnError Customer.ts
