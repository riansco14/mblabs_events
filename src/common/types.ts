export type UserType = {
    id: number
    email: string
    username: string
  };

  
export interface EventCardType {
  idEvent: number
  dateString: string
  eventName: string
  localName: string
  highlight?: boolean
}