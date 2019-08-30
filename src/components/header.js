import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'

export default () => (
    <header>
        <div className={styles.header__container}>
            <img src="/images/logo_frkkarlsson.svg" alt="Logo for Frk Karlsson"></img>
        </div>
        <nav className={styles.nav__wrapper}>
            <Link to="/">Home</Link> <Link to="/couture">Couture</Link> <Link to="/wedding">Wedding</Link> <Link to="/about">About</Link>  <Link to="/contact">Contact</Link> <Link to="/graphql">Chart.js</Link>
        </nav>
    </header>
)
