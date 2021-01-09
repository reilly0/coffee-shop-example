//BlogPostTemplate.js

//createPages, implemented in gatsby-node.js will call this component 
//template page and when it does, it will pass a context with the 
//parameter for the page query; that query result will then provide 
//the {data} props arg for the component

import React     from 'react';
import {graphql} from 'gatsby';
import Layout    from '../components/Layout';
import styles    from './BlogPostTemplate.module.css';

//props {data} indicates we'll be using our own page query

export default function BlogPostTemplate({data})
{
    const title = data.markdownRemark.frontmatter.title;

    return (
        <Layout>
            <div className = {styles.blogpost}>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML = 
                    {{__html:data.markdownRemark.html}}
                />
            </div>
        </Layout>
    );

};

//page query, parameterized on $slug, passed in createPage context arg
//filter markdownRemark to match this slug parameter
export const query = graphql`
query($slug: String!)
{markdownRemark(fields: {slug: {eq: $slug}})
{html frontmatter{title}}
}`;
