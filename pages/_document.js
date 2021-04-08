import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { DEFAULT_SITE_DESC, DEFAULT_SITE_TITLE } from '../constants'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{DEFAULT_SITE_TITLE}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={DEFAULT_SITE_DESC} />
          <meta name="theme-color" content="#141417" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
