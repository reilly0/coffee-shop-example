//index.js

import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';

import styles from './index.module.css';

import BlogPostListings from '../components/BlogPostListings';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  {
    site {siteMetadata {

    title

    }}}`);

  return (
    <Layout>
      <div id={styles.hero}>
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
      <BlogPostListings/>
    </Layout>
  );
}

