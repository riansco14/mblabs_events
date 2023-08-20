import { EventCardType } from "../src/common/types";

function login({ email, password }) {
  if (email === "admin@gmail.com" && password === "admin")
    return {
      username: "Admin",
      email: "admin@gmail.com",
      token: "12345",
    };
  throw Error("Not Found");
}

export const getEvents = (): EventCardType[] =>  [
  {
    idEvent: 4,
    dateString: "Mon, Apr 18 · 21:00 Pm",
    datePeriod: "21:00 Pm - 23:30 Pm",
    location: "Chevrolet Hall",
    locationAddress: "Avenida Recife, 386, 56800-000",
    eventName: "La Rosalia",
    localName: "Razzmatazz",
    highlight: true,
    price: "R$ 50,00",
  },
  {
    idEvent: 1,
    dateString: "Thu, Apr 19 · 20.00 Pm",
    datePeriod: "21:00 Pm - 23:30 Pm",
    location: "Chevrolet Hall",
    locationAddress: "Avenida Recife, 386, 56800-000",
    eventName: "The Kooks",
    localName: "Razzmatazz",
    price: "R$ 10,00",
  },
  {
    idEvent: 2,
    dateString: "Fri, Apr 22 · 21.00 Pm",
    datePeriod: "21:00 Pm - 23:30 Pm",
    location: "Chevrolet Hall",
    locationAddress: "Avenida Recife, 386, 56800-000",
    eventName: "The Wombats",
    localName: "Sala Apolo",
    price: "R$ 20,00",
  },
  {
    idEvent: 3,
    dateString: "Mon, Apr 25  · 17.30",
    datePeriod: "21:00 Pm - 23:30 Pm",
    location: "Chevrolet Hall",
    locationAddress: "Avenida Recife, 386, 56800-000",
    eventName: "Foster The People",
    localName: "La Monumental",
    price: "R$ 30,00",
  },
];

export const getEvent = (idEvent: number) =>{
  return getEvents().find(item=>item.idEvent === idEvent)
}

export const getImage = (idEvent: number) => {
  switch (idEvent) {
    case 1:
      return require("./banda2.png");
    case 2:
      return require("./banda3.png");
    case 3:
      return require("./banda4.png");
    case 4:
      return require("./banda1.png");
  }
};
