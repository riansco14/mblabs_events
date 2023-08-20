export type UserType = {
    id: number
    email: string
    username: string
  };

  
export interface EventCardType {
  idEvent: number
  dateString: string
  datePeriod: string
  locationAddress: string
  locationGPS: {
    latitude: string
    longitude: string
    label: string
  }
  eventName: string
  localName: string
  highlight?: boolean
  price: string
}