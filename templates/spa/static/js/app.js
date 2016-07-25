require("../css/app.css");
require("../index.html");

const Elm = require("../../src/Main.elm");
const mountNode = document.getElementById('main');

const app = Elm.Main.embed(mountNode);
