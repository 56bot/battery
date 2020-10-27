import Router from "next/router";
import withGA from "next-ga";

import "../css/reset.css";
import "../css/fonts.css";
import "../css/swiper.css";
import "../css/main.css";

import "intersection-observer";

import Layout from "components/layout";
import App, { Container } from "next/app";
import React from "react";
import { PageTransition } from "next-page-transitions";

class MyApp extends App {
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
        <PageTransition
          timeout={300}
          skipInitialTransition
          classNames="page-transition"
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            transform: translateY(100px);
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 2;
          }
          .page-transition-enter-active {
            transform: translateY(0vh);
            z-index: 2;
            position: fixed;
            top: 0;
            width: 100%;
            left: 0;
            z-index: 2;
            will-change: transform;
            transition: transform ease-out 300ms;
          }
          .page-transition-exit {
            opacity: 1;
            top: 0vh;
            left: 0;
            width: 100%;
            opacity: 0;
            transition: opacity ease-out 300ms;
          }
          .page-transition-exit-active {
            opacity: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withGA("UA-48498712-1", Router)(MyApp);
