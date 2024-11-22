#!/usr/bin/env node
import Runner from "./runner.js";

(async () => {
  await new Runner().run();
})();
