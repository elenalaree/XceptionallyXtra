import React from 'react';
import Posts from '../components/Projects/blogposts';

function Blog() {
    return (
        <section className='sectionBox'>
            <h1 id='posts'>Blog Posts</h1>
            <div className='postsBox'>
            <Posts />
            </div>
        </section>
    );
}

export default Blog;