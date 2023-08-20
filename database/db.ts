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
    eventName: "La Rosalia",
    localName: "Maracanã",
    locationAddress: "Maracanã, Rio de Janeiro",
    locationGPS: {
      latitude: "-22.912324276023295",
      longitude: "-43.226815212389724",
      label: "Maracanã"
    },
    highlight: true,
    price: "R$ 50,00",
  },
  {
    idEvent: 1,
    dateString: "Thu, Apr 19 · 20.00 Pm",
    datePeriod: "21:00 Pm - 23:30 Pm",
    eventName: "The Kooks",
    localName: "Razzmatazz",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
    price: "R$ 10,00",
  },
  {
    idEvent: 2,
    dateString: "Fri, Apr 22 · 21.00 Pm",
    datePeriod: "21:00 Pm - 23:30 Pm",
    eventName: "The Wombats",
    localName: "Sala Apolo",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
    price: "R$ 20,00",
  },
  {
    idEvent: 3,
    dateString: "Mon, Apr 25  · 17.30",
    datePeriod: "21:00 Pm - 23:30 Pm",
    eventName: "Foster The People",
    localName: "La Monumental",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
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
