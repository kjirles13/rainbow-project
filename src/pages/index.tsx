import React from 'react';
import styles from '../styles/Home.module.css';
import image from '../public/pride-booth.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.news}>
        <h1>Project Rainbow in the News</h1>
      </div>
      <div className={styles["main"]}>
        <div className={styles.mission}>
          <h1 className={styles["mission-title"]}>Our Mission</h1>
          <div className={styles["mission-body"]}>
            <p>The mission of Project Rainbow is to address the problem of LGBTQ+ homelessness by
              providing a safe haven for unhoused LGBTQ+ individuals and allies. We offer
              compassionate, professional, and peer-based assistance and advocacy, and connect folks
              with life-saving, gender-affirming care, as well as mental health supports and other wrap around services to ensure empowerment and succces.</p>
            <img src={image.src} alt="Project Rainbow member" className={styles["image-booth"]} />
          </div>
        </div>
        <div className={styles.vision}>
          <h1 className={styles["vision-title"]}>Our Vision</h1>
          <p className={styles["vision-body"]}>Our vision is simple: security and advocacy for the LGBTQ+ community led by the very individuals we intend to serve.
            Project Rainbow dares to take the phrase, "nothing about us without us" to the next level through empowerment and professional development
            of the individuals in need of our services with interest in working in the field. We believe that there is no better leader than someone with current or
            past lived experience and we intend on providing these individuals with the supports and resources to lead the project for years to come.</p>
        </div>
      </div>
    </div>
  )
}
