//BlogPostLising.js

import React from 'react';
import styles from './BlogPostListing.module.css';

export default function BlogPostListing({title, date, excerpt})
{
    return (
        <article className = {styles.blogpostlisting}>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{excerpt}</p>
        </article>
    );
}
