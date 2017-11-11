"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const styles_1 = require("material-ui/styles");
const AppBar_1 = require("../components/AppBar");
exports.default = () => React.createElement("div", null,
    React.createElement(head_1.default, null,
        React.createElement("title", null, "My page title"),
        React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" })),
    React.createElement("style", { global: true, jsx: true }, `
      html, body {
        padding: 0;
        margin: 0;
      }
    `),
    React.createElement(styles_1.MuiThemeProvider, null,
        React.createElement(AppBar_1.AppBar, null)));
