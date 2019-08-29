import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>Couture</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        <div>I can make your dress 😃</div>
    </Layout>
)