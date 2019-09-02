import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class ImageApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Bundler Image App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}

export default ImageApp;
