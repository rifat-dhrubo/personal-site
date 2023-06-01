import "src/styles/globals.css";
import "src/styles/nProgress.css";

import { Nunito } from "@next/font/google";
import { type AppType } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";

import { Head } from "src/components/Head";
import { ThemeProvider } from "src/utils/darkMode";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = (Component as any).getLayout || ((page: any) => page);

  return (
    <ThemeProvider>
      <Head />
      <div
        className={`${nunito.variable} h-full min-h-screen bg-background font-sans text-foreground`}
      >
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  );
};
export default MyApp;
