export type UserType = {
  id: number;
  email: string;
  username: string;
};

export type EventTicketType = {
  id: number;
  type: string;
  value: number;
};

export type CityType = {
  id: number;
  state: string;
  city: string;
};
export interface EventCardType {
  idEvent: number;
  locationAddress: string;
  locationGPS: {
    latitude: string;
    longitude: string;
    label: string;
  };
  city : CityType;
  dateInfo: {
    startDate: number;
    endDate: number;
  };
  eventName: string;
  locationName: string;
  highlight?: boolean;
  price: string;
  ticket : EventTicketType;
}


export type TicketType = {
  id: number;
  event: EventCardType;
  amount: number
  past: boolean
};
