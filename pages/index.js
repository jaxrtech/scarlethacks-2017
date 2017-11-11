"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
exports.default = () => React.createElement("div", null,
    "Welcome to next.js!",
    React.createElement(link_1.default, { href: "/about" },
        React.createElement("a", null, "here")));
