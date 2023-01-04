import type { DocumentContext, DocumentInitialProps } from "next/document";
import { Head, Html, Main, NextScript } from "next/document";
import Document from "next/document";
import Script from "next/script";

const modeScript = `function getInitialColorMode(){const e=window.localStorage.getItem("color-mode");if("string"==typeof e)return e;const t=window.matchMedia("(prefers-color-scheme: dark)");return"boolean"==typeof t.matches&&t.matches?"dark":"light"}"dark"===getInitialColorMode()?(document.documentElement.classList.add("dark"),document.documentElement.style.colorScheme="dark"):(document.documentElement.classList.remove("dark"),document.documentElement.style.colorScheme="light");`;

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: modeScript,
            }}
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
