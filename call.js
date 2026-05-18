export class Call {
  constructor(
    durationInMinutes,
    date,
    originPhoneNumber,
    destinationPhoneNumber,
  ) {
    this.durationInMinutes = durationInMinutes;
    this.date = date;
    this.originPhoneNumber = originPhoneNumber;
    this.destinationPhoneNumber = destinationPhoneNumber;
  }

  calculateCost() {
    throw new Error("calculateCost must be implemented");
  }

  getDescription() {
    throw new Error("getDescription must be implemented");
  }

  formatCost(cost) {
    return `$${cost.toFixed(2)}`;
  }
}
