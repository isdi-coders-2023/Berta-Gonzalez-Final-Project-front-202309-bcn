import { http, HttpResponse } from "msw";
import {
  ballsMock,
  ballsModifyMock,
  gremlinsMock,
  harryPotterMock,
} from "./ballsMock";

const urlApi = import.meta.env.VITE_API_URL;

export const handler = [
  http.get(`${urlApi}/balls`, () => {
    return HttpResponse.json({ balls: ballsMock });
  }),
  http.delete(`${urlApi}/balls/:id`, () => HttpResponse.json({})),
  http.patch(`${urlApi}/balls`, () => HttpResponse.json()),
  http.post(`${urlApi}/balls/add`, () => HttpResponse.json(gremlinsMock)),
  http.get(`${urlApi}/balls/:id`, () =>
    HttpResponse.json({ ball: harryPotterMock }),
  ),
  http.patch(`${urlApi}/balls/:id`, () =>
    HttpResponse.json({ ball: ballsModifyMock }),
  ),
];

export const errorHandlers = [
  http.get(`${urlApi}/balls`, () => HttpResponse.error()),
  http.delete(`${urlApi}/balls/:id`, () => HttpResponse.error()),
  http.patch(`${urlApi}/balls`, () => HttpResponse.error()),
  http.post(`${urlApi}/balls/add`, () => HttpResponse.error()),
  http.get(`${urlApi}/balls/:id`, () => HttpResponse.error()),
  http.patch(`${urlApi}/balls/:id`, () => HttpResponse.error()),
];
