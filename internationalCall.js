import { Call } from "./call.js";

export class Country {
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

export class InternationalCall extends Call {
  constructor(
    durationInMinutes,
    date,
    originPhoneNumber,
    destinationPhoneNumber,
    destinationCountry,
  ) {
    super(durationInMinutes, date, originPhoneNumber, destinationPhoneNumber);

    this.destinationCountry = destinationCountry;
  }

  calculateCost() {
    return this.destinationCountry.calculateCallCost(this.durationInMinutes);
  }

  getDescription() {
    return `
[INTERNATIONAL CALL]
Country: ${this.destinationCountry.getName()}
From: ${this.originPhoneNumber}
To: ${this.destinationPhoneNumber}
Duration: ${this.durationInMinutes} minutes
Cost: ${this.formatCost(this.calculateCost())}
`;
  }
}
