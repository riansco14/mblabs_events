export type UserType = {
    id: number
    email: string
    username: string
  };

  
export interface EventCardType {
  idEvent: number
  dateString: string
  datePeriod: string
  location: string
  locationAddress: string
  eventName: string
  localName: string
  highlight?: boolean
  price: string
}