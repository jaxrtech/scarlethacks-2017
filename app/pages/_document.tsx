import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from '../components/AppBar';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style>{`
            html, body {
                padding: 0;
                margin: 0;
            }
          `}</style>
        </Head>
        <body>
          <MuiThemeProvider>
            <AppBar/>
            <Main />
          </MuiThemeProvider>
          <NextScript />
        </body>
      </html>
    )
  }
}