import { Bill } from "./bill.js";
import { Customer } from "./customer.js";
import { Country, InternationalCall } from "./internationalCall.js";
import { City, NationalCall } from "./nationalCall.js";
import { LocalCall } from "./localCall.js";

const spain = new Country("Spain", 3);
const usa = new Country("USA", 5);
const brazil = new Country("Brazil", 2);

const cordoba = new City("Cordoba", 0.5);
const mendoza = new City("Mendoza", 0.7);
const rosario = new City("Rosario", 0.6);

const customer = new Customer("Maria Suarez", "11-5555-5555");

const bill = new Bill(customer, 5, 2026, 1500);

bill.addCall(
  new LocalCall(
    10,
    new Date("2026-05-11T10:00:00"),
    "11-5555-5555",
    "11-4444-4444",
  ),
);

bill.addCall(
  new LocalCall(
    20,
    new Date("2026-05-11T22:00:00"),
    "11-5555-5555",
    "11-3333-3333",
  ),
);

bill.addCall(
  new LocalCall(
    30,
    new Date("2026-05-09T15:00:00"),
    "11-5555-5555",
    "11-2222-2222",
  ),
);

bill.addCall(
  new NationalCall(15, new Date(), "11-5555-5555", "351-999-999", cordoba),
);

bill.addCall(
  new InternationalCall(8, new Date(), "11-5555-5555", "+34-999-999", spain),
);

bill.addCall(
  new InternationalCall(5, new Date(), "11-5555-5555", "+1-999-999", usa),
);

bill.print();
