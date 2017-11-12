"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const document_1 = require("next/document");
const server_1 = require("styled-jsx/server");
const styles_1 = require("material-ui/styles");
const AppBar_1 = require("../components/AppBar");
class MyDocument extends document_1.default {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();
        const styles = server_1.default();
        return { html, head, errorHtml, chunks, styles };
    }
    render() {
        return (React.createElement("html", null,
            React.createElement(document_1.Head, null,
                React.createElement("title", null, "My page title"),
                React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
                React.createElement("style", null, `
            html, body {
                padding: 0;
                margin: 0;
            }
          `)),
            React.createElement("body", null,
                React.createElement(styles_1.MuiThemeProvider, null,
                    React.createElement(AppBar_1.AppBar, null),
                    React.createElement(document_1.Main, null)),
                React.createElement(document_1.NextScript, null))));
    }
}
exports.default = MyDocument;
