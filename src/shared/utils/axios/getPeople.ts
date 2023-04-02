import { IPeople } from "@/interfaces/people.interface";
import { AxiosError } from "axios";
import { IPeopleRequest } from "@/interfaces/peopleRequest.interface";
import { http } from "@/shared/utils/axios/http";

export async function getPeople(
  search: string,
  callback: (card: IPeople[]) => void
): Promise<void> {
  try {
    const url = `?search=${search}`;
    const response = await http.get<IPeopleRequest>(url);
    callback(response.data.results);
  } catch (error) {
    if (error instanceof AxiosError) {
      const { name, message, code } = error;
      const axiosError = { name, message, code };
      alert(JSON.stringify(axiosError));
    }
  }
}
