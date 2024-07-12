class Customer {

 private firstName: string;
 private lastName: string;

  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

let myCustomer = new Customer("Martin", "Dixon");

// npx tsc --noEmitOnError 01-class-definition/Customer.ts will keep it from compiling when there is an error.
// if firstName is private it will error out but it compiles anyway unless we flag it as explained above.
console.log(myCustomer.firstName) 
