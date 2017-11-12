import * as React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from '../components/AppBar';

export default () =>
  <div>
    <p>Hi Noah!</p>
    <Link href="/about"><a>About Page</a></Link>
  </div>