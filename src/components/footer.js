import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.scss'

export default () => (
    <footer>

        <div className={styles.footer__container}>
            <div className={styles.flex_footer}>
                <hr></hr>
            </div>

            <div className={styles.flex_footer_center}>
                <img className={styles.flex_footer_logo_img} src="/images/logo_frkkarlsson.svg" alt="Logo for Frk Karlsson"></img>
            </div>

            <div className={styles.flex_footer}>
                <hr></hr>
            </div>
        </div>

        <div className={styles.footer__container}>
            <div className={styles.flex_footer}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/couture">Couture</Link> | <Link to="/wedding">Wedding</Link></li>
                </ul>
            </div>

            <div className={[styles.flex_footer_center, styles.flex_footer_socialmedia_img].join(' ')}>
                <img src="/images/ck_facebook.svg" alt="Logo for Frk Karlsson"></img>
                <img src="/images/ck_insta.svg" alt="Logo for Frk Karlsson"></img>
                <img src="/images/ck_linkedin.svg" alt="Logo for Frk Karlsson"></img>
            </div>

            <div className={styles.flex_footer}>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>

    </footer>
)
