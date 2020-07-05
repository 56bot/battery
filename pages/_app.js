import "../css/reset.css";
import "../css/fonts.css";
import "../css/main.css";

import "intersection-observer";

import Layout from "components/layout";

import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Layout>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity ease-out 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ease-out 300ms;
          }
        `}</style>
      </Layout>
    );
  }
}
