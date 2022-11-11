import { ColorModeScript } from "@chakra-ui/react";
import Meta from "components/layout/Meta";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import customTheme from "styles/customTheme";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Meta />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customTheme.config?.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
