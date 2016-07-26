"use strict";

var chalk = require("chalk");
var Handlebars = require("handlebars");

module.exports = {
  templateString: function(string, data) {
    var template = Handlebars.compile(string);
    return template(data);
  },
  capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  },
  logCreated: function(message) {
    console.log(chalk.green("[ CREATED ] ") + chalk.magenta(message));
  },
  logUpdated: function(message) {
    console.log(chalk.yellow("[ UPDATED ] ") + chalk.magenta(message));
  }
}
