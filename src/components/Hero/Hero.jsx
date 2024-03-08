import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Ami</h1>
            <p className={styles.description}>I am Full stack software engineer with 4 years of experience. Reach out if you like to learn more!</p>
            <a className={styles.contactBtn} href='mailto:ami.bhadani@gmail.com'>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='hero-image' className={styles.heroImg} />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero;
 