export type UserType = {
  id: number;
  email: string;
  username: string;
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
}


export type TicketType = {
  id: number;
  event: EventCardType;
  amount: number
  past: boolean
};
