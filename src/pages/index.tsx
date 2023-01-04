import React from "react";
import Balancer from "react-wrap-balancer";

import { Button } from "src/components/Button";
import { Layout } from "src/components/Layout";

const index = () => {
  return (
    <Layout>
      <main className="px-8 pt-12 sm:px-16 sm:pt-20">
        <div className="container ml-auto sm:mt-40">
          <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl sm:leading-tight">
            <Balancer>
              Hi, <span className="wave">👋</span> I&apos;m Rifat Hossain. An
              avid reader and a film buff. Also, I build things for the web.
            </Balancer>
          </h1>
          <p className="mt-8 max-w-4xl text-xl leading-8 dark:text-zinc-400 sm:mt-12">
            <Balancer>
              I&apos;m a web developer with a passion for learning and creating.
              I&apos;ve been in this field for over 2 years now and have a
              strong focus on building high-quality, user-friendly software
              solutions. I enjoy working with others and am always eager to stay
              updated on the latest technologies and trends in software
              engineering
            </Balancer>
          </p>

          <Button wrapperClassName="mt-8 sm:mt-24">Resume.pdf</Button>
        </div>
      </main>
    </Layout>
  );
};

export default index;
