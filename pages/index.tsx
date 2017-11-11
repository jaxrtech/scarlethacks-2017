import * as React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from '../components/AppBar';

export default () =>
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style global jsx>{`
      html, body {
        padding: 0;
        margin: 0;
      }
    `}</style>
    <MuiThemeProvider>
      <AppBar/>
    </MuiThemeProvider>
  </div>