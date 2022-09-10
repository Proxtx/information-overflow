import { listen } from "@proxtx/framework";
import config from "@proxtx/config";
import { genMod } from "./plugins/test/main.js";
await listen(config.port);

console.log("Server started. Port:", config.port);
