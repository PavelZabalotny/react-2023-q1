import { IPeople } from "@/interfaces/people.interface";

export interface IPeopleRequest {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}
