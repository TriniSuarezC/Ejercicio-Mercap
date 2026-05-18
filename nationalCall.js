import { Call } from "./call.js";

export class City {
  constructor(name, pricePerMinute) {
    this.name = name;
    this.pricePerMinute = pricePerMinute;
  }

  calculateCallCost(durationInMinutes) {
    return durationInMinutes * this.pricePerMinute;
  }

  getName() {
    return this.name;
  }
}

export class NationalCall extends Call {
  constructor(
    durationInMinutes,
    date,
    originPhoneNumber,
    destinationPhoneNumber,
    destinationCity,
  ) {
    super(durationInMinutes, date, originPhoneNumber, destinationPhoneNumber);

    this.destinationCity = destinationCity;
  }

  calculateCost() {
    return this.destinationCity.calculateCallCost(this.durationInMinutes);
  }

  getDescription() {
    return `
[NATIONAL CALL]
City: ${this.destinationCity.getName()}
From: ${this.originPhoneNumber}
To: ${this.destinationPhoneNumber}
Duration: ${this.durationInMinutes} minutes
Cost: ${this.formatCost(this.calculateCost())}
`;
  }
}
