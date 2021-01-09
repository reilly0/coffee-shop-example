//BlogPostListings.js

import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BlogPostListing from './BlogPostListing';

export default function BlogPostListings()
{

    const data = useStaticQuery(graphql`
    {allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC})
    {edges 
        {node 
            {
                id
                frontmatter
                {
                    title, 
                    date(formatString: "MMMM D, YYYY")
                }
                fields
                {
                    slug
                }
                excerpt
            }
        }
    }
    }`);

    return (
        <div>
        {data.allMarkdownRemark.edges.map
            (edge => (<BlogPostListing
                       key     = {edge.node.id}
                       slug    = {edge.node.fields.slug}
                       title   = {edge.node.frontmatter.title}
                       date    = {edge.node.frontmatter.date}
                       excerpt = {edge.node.excerpt}
                       />))
        }
        </div>);
} 
