import { http, HttpResponse } from "msw";
import ballsMock from "./ballsMock";

const urlApi = import.meta.env.VITE_API_URL;

export const handler = [
  http.get(`${urlApi}/balls`, () => {
    return HttpResponse.json(ballsMock);
  }),

  http.delete(`${urlApi}/balls/:id`, () => HttpResponse.json({})),

  http.patch(`${urlApi}/balls`, () => HttpResponse.json({})),
];

export const errorHandlers = [
  http.get(`${urlApi}/balls`, () => HttpResponse.error()),
  http.delete(`${urlApi}/balls/:id`, () => HttpResponse.error()),
  http.patch(`${urlApi}/balls`, () => HttpResponse.error()),
];
