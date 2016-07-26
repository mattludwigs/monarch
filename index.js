#!/usr/bin/env node

"use strict";

var program = require("commander");

var newProject = require("./commands/new");
var newComponent = require("./commands/component");
var routeGen = require("./commands/route");

program
  .version("0.0.1")


program
  .command("new <name>")
  .description("create a new Elm single page application (monarch-app)")
  .action(newProject);

program
  .command("component <name>")
  .description("create a new Elm component for a monarch-app")
  .action(newComponent);

program
  .command("route <name>")
  .description("create a new route for monarch-app")
  .action(routeGen);

program.parse(process.argv);
