import { formatDistanceToNow } from "date-fns";
import React from "react";
import Balancer from "react-wrap-balancer";

import { LinkButton } from "@/components/Button";
import { Layout } from "@/components/Layout";

const IndexPage = () => {
  const duration = formatDistanceToNow(new Date(2020, 6, 1));
  return (
    <Layout>
      <div className="grid min-h-[calc(100vh-theme(height.24))] grid-rows-[1fr,auto] px-4 pt-12 sm:pt-20 md:min-h-screen md:px-16">
        <main className="container ml-auto md:mt-24 lg:mt-40 px-8">
          <h1 className=" text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-tight">
            <Balancer>
              Hi, <span className="wave">👋</span> I&apos;m Rifat Hossain. Web
              developer by day, reader and film fanatic by night. I make dreams
              reality with code and popcorn.
            </Balancer>
          </h1>
          <p className="mt-8 text-xl leading-8 text-muted-foreground sm:mt-12">
            <Balancer>
              Passionate web developer with {duration} in the industry. Striving
              to create user-friendly, reliable software solutions. I&apos;m
              always looking for ways to stay updated on the latest technologies
              and trends in software engineering and enjoy collaborating with
              others. My mission is to build user-friendly software solutions
              with a sprinkle of awesomeness.
            </Balancer>
          </p>

          <LinkButton
            href="cv-rifat-hossain.pdf"
            wrapperClassName="mt-8 sm:mt-24 max-w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume.pdf
          </LinkButton>
        </main>
        <footer className="mt-4 py-2 text-center text-xs text-muted-foreground">
          &copy; 2023-present Rifat Hossain. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
};

export default IndexPage;
