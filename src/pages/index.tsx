import React from "react";
import Balancer from "react-wrap-balancer";

import { Button, LinkButton } from "src/components/Button";
import { Layout } from "src/components/Layout";

const index = () => {
  return (
    <Layout>
      <div className="grid min-h-[calc(100vh-theme(height.24))] grid-rows-[1fr,auto] px-8  pt-12 sm:px-16 sm:pt-20 md:min-h-screen">
        <main className="container ml-auto sm:mt-40">
          <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-tight">
            <Balancer>
              Hi, <span className="wave">👋</span> I&apos;m Rifat Hossain. An
              avid reader and a film buff. Also, I build things for the web.
            </Balancer>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-8 dark:text-zinc-400 sm:mt-12">
            <Balancer>
              I&apos;m a web developer with a passion for learning and creating.
              I&apos;ve been in this field for over{" "}
              {new Date().getFullYear() - 2021} years now and have a strong
              focus on building high-quality, user-friendly software solutions.
              I enjoy working with others and am always eager to stay updated on
              the latest technologies and trends in software engineering
            </Balancer>
          </p>

          <LinkButton
            href="cv-rifat-hossain.pdf"
            wrapperClassName="mt-8 sm:mt-24 max-w-fit"
          >
            Resume.pdf
          </LinkButton>
        </main>
        <footer className="mt-auto py-2 text-center text-xs dark:text-zinc-400">
          &copy; 2023-present Rifat Hossain. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
};

export default index;
