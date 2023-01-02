import "src/styles/global.css";
import "src/styles/nProgress.css";

import { Nunito } from "@next/font/google";
import { type AppType } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";

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
      <div
        className={`h-full min-h-screen bg-zinc-50 dark:bg-neutral-900 ${nunito.variable} font-sans text-zinc-800 dark:text-zinc-100`}
      >
        <style jsx global>{`
          *,
          *::before,
          *::after {
            font-family: ${nunito.style.fontFamily};
          }
        `}</style>

        {getLayout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  );
};
export default MyApp;
