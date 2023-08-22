import { useQuery } from "react-query";
import { getTickets } from "../../../database/db";
import { TicketType } from "../../common/types";



type FetchTickets = () => Promise<TicketType[]>;

const tickets: FetchTickets = async () => {
    const data = getTickets()

  return data;
};

const useFetchTickets = () =>
  useQuery(["tickets"], () => tickets());


export default useFetchTickets;