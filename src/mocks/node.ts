import { setupServer } from "msw/node";
import handler from "./handlers";

const server = setupServer(...handler);

export default server;
