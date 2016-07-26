"use strict";

var projectDir = process.cwd();
var fs = require("fs-extra");
var readline = require("readline");
var path = require("path");
var _ = require("lodash");
var templateDir = path.join(__dirname, "../", "templates");

var monarchUtils = require("../lib");

module.exports = function(name) {
  var capCaseName = _.replace(_.startCase(name), " ", "")

  // fs.appendFile(projectDir + "/src/router/Routes.elm", "  | " + capCaseName + "Route\n", function (err) {
  //   if (err) {
  //     throw err;
  //   }
  //   monarchUtils.logUpdated("src/router/Routes.elm");
  // });
  //
  // fs.readFile(path.join(templateDir, "/", "matchers/Base.elm"), function (err, chunk) {
  //   if (err) {
  //     throw err;
  //   }
  //   var source = monarchUtils.templateString(chunk.toString(), {
  //     name: capCaseName,
  //     routeName: _.camelCase(capCaseName) + "Route",
  //     route: capCaseName + "Route",
  //   });
  //   fs.writeFile(path.join(projectDir, "/src/router/routes/", capCaseName + ".elm"), source, function (err) {
  //     if (err) {
  //       throw err
  //     }
  //     monarchUtils.logCreated("src/router/routes/" + capCaseName + ".elm");
  //   });
  // });

  fs.readFile(path.join(projectDir, "/src/router/routes/Matchers.elm"), function (err, chunk) {
    var splitChunk = chunk.toString().split("\n");

    var addedImport = splitChunk.filter(c => {
      return _.includes(c, "import");
    });
    addedImport.push("import Router.Routes." + capCaseName + " exposing (" + _.camelCase(capCaseName) + "RouteMatcher" + ")");
    console.log(addedImport);

    splitChunk[splitChunk.length - 2] = "    , " + _.camelCase(capCaseName) + "RouteMatcher",
    splitChunk[splitChunk.length - 1] = "    ]"

    console.log(splitChunk.join("\n"));
  });

  // var lineReaderMatchers = readline.createInterface({
  //   input: fs.createReadStream(path.join(projectDir, "/src/router/routes/Matchers.elm"))
  // });
  //
  // lineReaderMatchers.on("line", function (line) {
  //   line
  //
  // });
}
