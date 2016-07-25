"use strict";

var pwd = process.cwd();
var chalk = require("chalk");
var path = require("path");
var fs = require("fs-extra");
var templateDir = path.join(__dirname, "../", "templates/spa");

var monarchUtils = require("../lib");

var filteredTemplateFiles = [
  "/package.json"
];

function handleDirs(projectName) {
  fs.walk(templateDir)
    .on("data", function(item) {
      var itemPath = item.path.replace(templateDir, "");
      var pathToDest = path.join(pwd, "/", projectName, itemPath);

      if (item.stats.isDirectory()) {
        fs.mkdirs(path.join(pwd, "/", projectName, "/", itemPath), function (err) {
          if (err) {
            console.log(err);
            throw err;
          }
          monarchUtils.logCreated(projectName + itemPath)
        });
      } else {
        fs.readFile(item.path, function(err, chunk) {

          if (itemPath === "/package.json" || itemPath === "/README.md") {
            var result = monarchUtils.templateString(chunk.toString(), {name: projectName});

            fs.writeFile(pathToDest, result, function (err) {
              if (err) {
                console.log(err);
              }
              monarchUtils.logCreated(projectName + itemPath)
            }); // writeFile
          } else {
            fs.copy(item.path, pathToDest, function (err) {
              if (err) {
                console.log(err);
              }

              monarchUtils.logCreated(projectName + itemPath)
            }); // copy
          }
        });
      }
    });
}

module.exports = function (name, opts) {
  var projectDir = pwd + "/" + name;
  fs.ensureDir(projectDir, function (err) {
    handleDirs(name);
  });
}
