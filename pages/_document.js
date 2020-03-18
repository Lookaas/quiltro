import Document, { Head, Html, Main, NextScript } from 'next/document';
import { resetCss } from '../assets/resetcss';

class MyDocument extends Document {
  componentDidMount() {
    window.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    window.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    window.isEdge = document.documentMode || /Edge/.test(navigator.userAgent);

  }

  render() {
    return (
      <Html>
        <Head>
          <style>{resetCss}</style>
        </Head>
        <body>
          <div id="portal_container" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
