import React from 'react'
import { getImageUrl } from '../../utils';

import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.container}>
       <h2 className={styles.title}>About</h2>
       <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt='me having laptop' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt='cursor image' />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience in building responsive and optimized web application</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt='cursor image' />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimised back-end systems and APIs</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt='UI image' />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created design systems as well</p>
                </div>
            </li>
        </ul>
       </div>  
    </section>
  )
}

export default About
