import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email Icon'></img>
                <a href='mailto:ami.bhadani@gmail.com'>ami.bhadani@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='Linkedin Icon'></img>
                <a href=''>linkedin.com/Ami_bhadani</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github Icon'></img>
                <a href=''>Github</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact
