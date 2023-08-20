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
    eventName: "La Rosalia",
    locationName: "Maracanã",
    locationAddress: "Maracanã, Rio de Janeiro",
    locationGPS: {
      latitude: "-22.912324276023295",
      longitude: "-43.226815212389724",
      label: "Maracanã"
    },
    dateInfo:{
      startDate: 1700514000694,
      endDate: 1700521200694
    },
    highlight: true,
    price: "R$ 50,00",
  },
  {
    idEvent: 1,
    eventName: "The Kooks",
    locationName: "Razzmatazz",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
    dateInfo:{
      startDate: 1700514000694,
      endDate: 1700521200694
    },
    price: "R$ 10,00",
  },
  {
    idEvent: 2,
    eventName: "The Wombats",
    locationName: "Sala Apolo",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
    dateInfo:{
      startDate: 1700514000694,
      endDate: 1700521200694
    },
    price: "R$ 20,00",
  },
  {
    idEvent: 3,
    eventName: "Foster The People",
    locationName: "La Monumental",
    locationAddress: "Avenida Recife, 386, 56800-000",
    locationGPS: {
      latitude: "-8.034432794113949",
      longitude: "-34.87095323678137",
      label: "Classic Hall"
    },
    dateInfo:{
      startDate: 1700514000694,
      endDate: 1700521200694
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
