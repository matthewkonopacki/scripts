#!/usr/bin/env node

import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import * as fs from "node:fs";
import Mustache from "mustache";
const argv = yargs(hideBin(process.argv)).argv;

const scriptName = argv._[0];

if (scriptName == null) {
  throw new Error("Script name is required");
}

const directory = `./src/${argv._[0]}`;

fs.mkdirSync(directory);

const scriptDetails = {
  className: scriptName,
};

const templateClassFile = fs.readFileSync(
  "scripts/templates/class-template.txt",
  "utf8",
);
const templateIndexFile = fs.readFileSync(
  "scripts/templates/index-template.txt",
  "utf8",
);

fs.writeFileSync(
  `${directory}/${scriptName}.ts`,
  Mustache.render(templateClassFile, scriptDetails),
);

fs.writeFileSync(
  `${directory}/index.ts`,
  Mustache.render(templateIndexFile, scriptDetails),
);
