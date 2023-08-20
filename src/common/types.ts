export type UserType = {
    id: number
    email: string
    username: string
  };

  
export interface EventCardType {
  idEvent: number
  locationAddress: string
  locationGPS: {
    latitude: string
    longitude: string
    label: string
  }
  dateInfo: {
    startDate: number
    endDate: number
  }
  eventName: string
  locationName: string
  highlight?: boolean
  price: string
}