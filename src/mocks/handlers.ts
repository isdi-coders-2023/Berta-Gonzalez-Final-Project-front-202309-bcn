import { http, HttpResponse } from "msw";
import ballsMock from "./ballsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/balls`, () => {
    return HttpResponse.json(ballsMock);
  }),
];

export default handler;
