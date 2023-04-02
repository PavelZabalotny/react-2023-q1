import axios from "axios";
import { BASE_PEOPLE_URL } from "@/shared/constants";

export const http = axios.create({
  baseURL: `${BASE_PEOPLE_URL}`,
});
