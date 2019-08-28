import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
    <Layout>
    <h1>Frk Karlsson</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
<div>Hello index!</div>
    </Layout>
)
