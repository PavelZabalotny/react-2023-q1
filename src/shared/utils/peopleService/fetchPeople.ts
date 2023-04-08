import { SWAPI_BASE_URL, SWAPI_SEARCH_QUERY } from "@/shared/constants";
import { IPeople } from "@/interfaces/people.interface";

export async function fetchPeople(search: string): Promise<IPeople[]> {
  const url = `${SWAPI_BASE_URL}?${SWAPI_SEARCH_QUERY}=${search}&format=json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status code ${response.status}`);
  }

  const data = await response.json();
  return data.results;
}
