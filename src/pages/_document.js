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
        <Head></Head>
        <body className="bg-[#E7ECEF]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
