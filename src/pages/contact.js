import React from "react"
import { Link } from "gatsby"

export default () => (
    <div>
        <h1>Frk Karlsson</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        <div>Hello contact!</div>
    </div>
)