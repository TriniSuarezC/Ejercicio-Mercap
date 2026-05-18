export class Customer {
  constructor(name, phoneNumber) {
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  getName() {
    return this.name;
  }

  getPhoneNumber() {
    return this.phoneNumber;
  }
}
