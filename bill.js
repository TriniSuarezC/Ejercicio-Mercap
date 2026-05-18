export class Bill {
  constructor(customer, month, year, monthlyBasicFee) {
    this.customer = customer;
    this.month = month;
    this.year = year;
    this.monthlyBasicFee = monthlyBasicFee;
    this.calls = [];
  }

  addCall(call) {
    this.calls.push(call);
  }

  getCallsOfCurrentMonth() {
    return this.calls.filter((call) => {
      const callDate = call.date;

      const sameMonth = callDate.getMonth() + 1 === this.month;

      const sameYear = callDate.getFullYear() === this.year;

      return sameMonth && sameYear;
    });
  }

  calculateCallsTotal() {
    return this.getCallsOfCurrentMonth().reduce(
      (total, call) => total + call.calculateCost(),
      0,
    );
  }

  calculateTotal() {
    return this.monthlyBasicFee + this.calculateCallsTotal();
  }

  print() {
    console.log("=================================");
    console.log("PHONE BILL");
    console.log("=================================");

    console.log(`Customer: ${this.customer.getName()}`);
    console.log(`Phone: ${this.customer.getPhoneNumber()}`);
    console.log(`Month: ${this.month}/${this.year}`);

    console.log("\n----- CALL DETAILS -----");

    this.getCallsOfCurrentMonth().forEach((call) => {
      console.log(call.getDescription());
    });

    console.log("----- TOTALS -----");

    console.log(`Monthly basic fee: $${this.monthlyBasicFee.toFixed(2)}`);

    console.log(`Calls total: $${this.calculateCallsTotal().toFixed(2)}`);

    console.log(`FINAL TOTAL: $${this.calculateTotal().toFixed(2)}`);

    console.log("=================================");
  }
}
