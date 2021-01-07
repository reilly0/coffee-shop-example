//BlogPost.js

import React from 'react';
import styles from './BlogPost.module.css';

export default function BlogPost({title, date, excerpt})
{
    return (
        <article className = {styles.blog}>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{excerpt}</p>
        </article>
    );
}
