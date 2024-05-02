import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Roy Bailey Business Website">
      <main>
        <HomepageFeatures
            image="img/rb-profile-2021.png"
            title="Roy Bailey"
            message="Software Engineering Manager"
            social={{
                twitter: "http://twitter.com/roybaileybiz",
                linkedin: "https://www.linkedin.com/in/roybailey",
                github: "https://github.com/roybailey"
            }}
            />
      </main>
    </Layout>
  );
}
