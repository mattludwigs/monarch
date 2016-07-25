#!/usr/bin/env node

"use strict";

var program = require("commander");

var newProject = require("./commands/new");
var newComponent = require("./commands/component");

program
  .version("0.0.1")


program
  .command("new <name>")
  .action(newProject);

program
  .command("component <name>")
  .action(newComponent);

program.parse(process.argv);
