import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/mainNavi";
import React, {useEffect, useState} from "react";
export default function App({ Component, pageProps }: AppProps) {


    useEffect(() => {
        const body = document.body;
        body.setAttribute('theme-mode', 'dark');
    });

  return (
      <Layout>
      </Layout>
      //<Component {...pageProps} />
  );
}
