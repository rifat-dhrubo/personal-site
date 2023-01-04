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
  description = "An avid reader and a film buff. Also, I build things for the web",
  ogTitle = "Rifat Hossain",
  ogDescription = "An avid reader and a film buff. Also, I build things for the web",
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

      {/* <meta property="og:image" content={`${ogImage}`} itemProp="image" key="og-image"  />
      <meta property="og:image:type" content={ogImageType}  key="og-image-type" />
      <meta property="og:image:height" content={ogImageHeight} key="og-image-height"  />
      <meta property="og:image:width" content={ogImageWidth} /> key="og-image-width"  */}

      {/* <meta property="fb:app_id" content="1733127810177735" />
      <meta name="twitter:card" content={twitterCard}  key="twitter-card" />
      <meta name="twitter:site" content={twitterSite}  key="twitter-site" />
      <meta name="twitter:creator" content={twitterCreator} / key="twitter-creator" >
      <meta name="twitter:title" content={twitterTitle} key="twitter-title" />
      <meta name="twitter:description" content={twitterDescription}  key="twitter-description" />
      <meta name="twitter:image" content={`https://${twitterImage}`}  key="twitter-image" /> */}
    </Head>
  );
};
