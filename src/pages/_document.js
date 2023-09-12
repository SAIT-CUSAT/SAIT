import Document, { Head, Html, Main, NextScript } from "next/document";

class AppDocument extends Document {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage;

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1714173809905801"
            crossorigin="anonymous"></script>
        </Head>
        <body className="bg-[#E7ECEF]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
