import axios from "axios";
import { SWAPI_BASE_URL } from "@/shared/constants";

export const http = axios.create({
  baseURL: `${SWAPI_BASE_URL}`,
});
