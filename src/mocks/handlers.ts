import { http, HttpResponse } from "msw";
import ballsMock from "./ballsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/balls`, () => {
    return HttpResponse.json(ballsMock);
  }),

  http.delete(`${urlApi}/balls/656241b0c4ddfcae991f0b13`, () =>
    HttpResponse.json({}),
  ),
];

export default handler;
