"use strict";

var pwd = process.cwd();
var chalk = require("chalk");
var path = require("path");
var fs = require("fs-extra");
var templateDir = path.join(__dirname, "../", "templates/component");
var componentsDir = pwd + "/src/components/";
var _ = require("lodash");

var monarchUtils = require("../lib");

function handleCompnonentCreation(name) {
  fs.ensureDir(componentsDir + "/" + name, function (err) {
    if (err) {
      throw err;
    }

    handleComponentTemplates(name);
  });
}

function handleComponentTemplates(name) {
  fs.walk(templateDir)
    .on("data", function (item) {
      if (!item.stats.isDirectory()) {
        fs.readFile(item.path, function (err, chunk) {
          var itemPath = item.path.replace(templateDir, "")
          var result = monarchUtils.templateString(chunk.toString(), {name: _.replace(_.startCase(name), " ", "") });

          fs.writeFile(path.join(componentsDir + name + itemPath), result, function (err) {
            if (err) {
              throw err;
            }
            monarchUtils.logCreated("src/components/" + name + itemPath)
          });
        });
      }
    })
}

module.exports = function (name, opts) {
  fs.ensureDir(componentsDir, function (err) {
    if (err) {
      throw err;
    }

    handleCompnonentCreation(name);
  });
}
