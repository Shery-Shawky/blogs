import React from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/Footer'
import Head from '../components/blogs/head'
import Posts from '../components/blogs/posts'

const Blog = () => {
    return (
        <>
            < Header />
            <Head />
            <Posts />
            <Footer />
        </>
    )
}

export default Blog;