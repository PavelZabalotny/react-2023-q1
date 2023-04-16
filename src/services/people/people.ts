import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SWAPI_BASE_URL } from "@/shared/constants";
import { IPeopleRequest } from "@/interfaces/peopleRequest.interface";

const url = `${SWAPI_BASE_URL}`;

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getPeople: builder.query<IPeopleRequest, string>({
      query: (search) => `?search=${search}&format=json`,
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
