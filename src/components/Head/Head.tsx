import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogImage?: string;
  ogImageType?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  ogUrl?: string;
};

export const CustomHead = ({
  title = "Rifat Hossain",
  description = "Rifat Hossain – Web developer, reader, and film fanatic. I make dreams reality with code and coffee. Passionate about building user-friendly, reliable software solutions.",
  ogTitle = "Rifat Hossain",
  ogDescription = "Rifat Hossain – Web developer, reader, and film fanatic. I make dreams reality with code and coffee. Passionate about building user-friendly, reliable software solutions.",
  ogType = "website",
  // ogImage = '',
  // ogImageType = 'image/png',
  // ogImageHeight = '2000',
  // ogImageWidth = '2000',
  // twitterCard = 'summary_large_image',
  // twitterSite = '@rifat',
  // twitterCreator = '@rifat',
  // twitterTitle = 'Rifat Hossain',
  // twitterDescription = "Hello.",
  // twitterImage = '',
  ogUrl,
}: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />

      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7e22ce" />
      <meta name="msapplication-TileColor" content="#f4f4f5" />
      <meta name="theme-color" content="#f4f4f5" />
      {/* Favicon */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>

      <meta name="description" content={description} key="description" />

      <meta property="og:title" content={ogTitle} key="og-title" />
      <meta
        property="og:description"
        content={ogDescription}
        key="og-description"
      />
      <meta property="og:type" content={ogType} key="og-type" />
      {ogUrl != null ? (
        <meta property="og:url" content={ogUrl} key="og-url" />
      ) : null}
      {ogUrl != null ? (
        <link rel="canonical" href={ogUrl} key="og-url" />
      ) : null}

      <meta
        property="og:image"
        content="https://rifathossain.dev/og"
        itemProp="image"
        key="og-image"
      />
      <meta property="og:image:type" content="image/png" key="og-image-type" />
      <meta property="og:image:width" content="1200" key="og-image-width" />
      <meta property="og:image:height" content="630" key="og-image-height" />

      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter-card"
      />
      <meta name="twitter:site" content="@rifat_dhrubo" key="twitter-site" />
      <meta
        name="twitter:creator"
        content="@rifat_dhrubo"
        key="twitter-creator"
      />
      <meta name="twitter:title" content="Rifat Hossain" key="twitter-title" />
      <meta
        name="twitter:description"
        content="Rifat Hossain – Web developer, reader, and film fanatic. I make dreams reality with code and coffee. Passionate about building user-friendly, reliable software solutions."
        key="twitter-description"
      />
      <meta
        name="twitter:image"
        content="https://rifathossain.dev/og"
        key="twitter-image"
      />
    </Head>
  );
};
