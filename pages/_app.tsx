import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'styled-components';

import {wrapper} from '~/redux/store';
import {themeDefault} from '~/styles/themes';

import '~/styles/default.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ffa500',
      contrastText: 'black',
    },
  },
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

class MyApp extends App<AppPropsWithLayout> {
  public static getInitialProps = wrapper.getInitialAppProps(({}) => async (appCtx) => {
    try {
      if (appCtx.ctx?.res?.statusCode === 404) {
        appCtx.ctx.res.writeHead(302, {Location: '/'});
        appCtx.ctx.res.end();
        return {
          pageProps: {},
        };
      }
    } catch (e) { }
    return {
      pageProps: {},
    };
  });

  public render() {
    const {Component, pageProps} = this.props;
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
      <ThemeProvider theme={themeDefault}>
        <React.Fragment>
          <Head>
            <title>nanocl - dashboard</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            <meta name="viewport" content="width=device-width, user-scalable=no" />
          </Head>
          <MuiThemeProvider theme={customTheme}>
            {getLayout(<Component {...pageProps} />)}
          </MuiThemeProvider>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(MyApp);
