import { CityType, EventCardType, TicketType } from "../src/common/types";

function login({ email, password }) {
  if (email === "admin@gmail.com" && password === "admin")
    return {
      username: "Admin",
      email: "admin@gmail.com",
      token: "12345",
    };
  throw Error("Not Found");
}

export const getCities = (): CityType[] => [
  {
    id: 1,
    state: "Pernambuco",
    city: "Recife",
  },
  {
    id: 2,
    state: "São Paulo",
    city: "São Paulo",
  },
  {
    id: 3,
    state: "Paraná",
    city: "Curitiba",
  },
];

export const getEvents = (idCity: number): EventCardType[] => {
  const eventsDB = [
    {
      idEvent: 1,
      eventName: "The Kooks",
      locationName: "Razzmatazz",
      locationAddress: "Avenida Recife, 386, 56800-000",
      locationGPS: {
        latitude: "-8.034432794113949",
        longitude: "-34.87095323678137",
        label: "Classic Hall",
      },
      city: getCities()[0],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
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
        label: "Classic Hall",
      },
      city: getCities()[0],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
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
        label: "Classic Hall",
      },
      city: getCities()[0],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 30,00",
    },
    {
      idEvent: 4,
      eventName: "La Rosalia",
      locationName: "Maracanã",
      locationAddress: "Maracanã, Rio de Janeiro",
      locationGPS: {
        latitude: "-22.912324276023295",
        longitude: "-43.226815212389724",
        label: "Maracanã",
      },
      city: getCities()[0],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      highlight: true,
      price: "R$ 50,00",
    },
    {
      idEvent: 5,
      eventName: "La Rosalia",
      locationName: "Maracanã",
      locationAddress: "Maracanã, Rio de Janeiro",
      locationGPS: {
        latitude: "-22.912324276023295",
        longitude: "-43.226815212389724",
        label: "Maracanã",
      },
      city: getCities()[1],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 50,00",
    },
    {
      idEvent: 6,
      eventName: "The Kooks",
      locationName: "Razzmatazz",
      locationAddress: "Avenida Recife, 386, 56800-000",
      locationGPS: {
        latitude: "-8.034432794113949",
        longitude: "-34.87095323678137",
        label: "Classic Hall",
      },
      city: getCities()[1],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 10,00",
      highlight: true,
    },
    {
      idEvent: 7,
      eventName: "The Wombats",
      locationName: "Sala Apolo",
      locationAddress: "Avenida Recife, 386, 56800-000",
      locationGPS: {
        latitude: "-8.034432794113949",
        longitude: "-34.87095323678137",
        label: "Classic Hall",
      },
      city: getCities()[2],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 20,00",
    },
    {
      idEvent: 8,
      eventName: "Foster The People",
      locationName: "La Monumental",
      locationAddress: "Avenida Recife, 386, 56800-000",
      locationGPS: {
        latitude: "-8.034432794113949",
        longitude: "-34.87095323678137",
        label: "Classic Hall",
      },
      city: getCities()[2],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 30,00",
    },
    {
      idEvent: 9,
      eventName: "La Rosalia",
      locationName: "Maracanã",
      locationAddress: "Maracanã, Rio de Janeiro",
      locationGPS: {
        latitude: "-22.912324276023295",
        longitude: "-43.226815212389724",
        label: "Maracanã",
      },
      city: getCities()[1],
      dateInfo: {
        startDate: 1700514000694,
        endDate: 1700521200694,
      },
      price: "R$ 50,00",
    },
  ];

  if (idCity === undefined || idCity === null || idCity === -1) {
    return eventsDB;
  }

  const eventsFiltered = eventsDB.filter((item) => item.city.id === idCity);
  return eventsFiltered;
};

export const getEvent = (idEvent: number) => {
  return getEvents(-1).find((item) => item.idEvent === idEvent);
};

export const getImage = (idEvent: number) => {
  if ([1,6].includes(idEvent)) {
    return require("./banda2.png");
  }
  if ([2,7].includes(idEvent)) {
    return require("./banda3.png");
  }
  if ([3,8].includes(idEvent)) {
    return require("./banda4.png");
  }
  if ([4,5].includes(idEvent)) {
    return require("./banda1.png");
  }
  if ([9].includes(idEvent)) {
    return require("./banda1grey.png");
  }
};


export const getTickets = (): TicketType[] => {
  return [{
    id: 1,
    amount: 1,
    event: getEvent(1),
    past: false
  },
  {
    id: 2,
    amount: 2,
    event: getEvent(2),
    past: false
  },
  {
    id: 3,
    amount: 2,
    event: getEvent(9),
    past: true
  }
]
}

