//BlogPostListng.js

import React from 'react';
import {Link} from 'gatsby';
import styles from './BlogPostListing.module.css';

export default function BlogPostListing({slug, title, date, excerpt})
{
    return (
        <article className = {styles.blogpostlisting}>
            <h2><Link to = {slug}>{title}</Link></h2>
            <h3>{date}</h3>
            <p>{excerpt}</p>
        </article>
    );
}
