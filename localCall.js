import { Call } from "./call.js";

export class LocalCall extends Call {
  constructor(
    durationInMinutes,
    date,
    originPhoneNumber,
    destinationPhoneNumber,
  ) {
    super(durationInMinutes, date, originPhoneNumber, destinationPhoneNumber);

    this.costCalculator = this.createCostCalculator();
  }

  createCostCalculator() {
    if (this.isWeekend()) {
      return new WeekendLocalCall();
    }

    if (this.isBusinessHour()) {
      return new WeekdayBusinessHourLocalCall();
    }

    return new WeekdayNonBusinessHourLocalCall();
  }

  calculateCost() {
    return this.costCalculator.calculateCost(this.durationInMinutes);
  }

  isWeekend() {
    const day = this.date.getDay();

    return day === 0 || day === 6;
  }

  isBusinessHour() {
    const hour = this.date.getHours();

    return hour >= 8 && hour < 20;
  }

  getDescription() {
    return `
[LOCAL CALL]
Type: ${this.costCalculator.constructor.name}
From: ${this.originPhoneNumber}
To: ${this.destinationPhoneNumber}
Duration: ${this.durationInMinutes} minutes
Cost: ${this.formatCost(this.calculateCost())}
`;
  }
}

class WeekdayBusinessHourLocalCall {
  static PRICE_PER_MINUTE = 0.2;

  calculateCost(duration) {
    return duration * WeekdayBusinessHourLocalCall.PRICE_PER_MINUTE;
  }
}

class WeekdayNonBusinessHourLocalCall {
  static PRICE_PER_MINUTE = 0.1;

  calculateCost(duration) {
    return duration * WeekdayNonBusinessHourLocalCall.PRICE_PER_MINUTE;
  }
}

class WeekendLocalCall {
  static PRICE_PER_MINUTE = 0.1;

  calculateCost(duration) {
    return duration * WeekendLocalCall.PRICE_PER_MINUTE;
  }
}
