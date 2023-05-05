import React from 'react';
import styles from '../styles/NavBar.module.css';
import { useRouter } from 'next/router';
import logo from '../public/logo.png';

export default function Navbar() {
    const router = useRouter();
        return (
            <>
            <div className={styles["nav-container"]}>
                <nav className={styles["nav-pages"]}>
                    <div className={styles.page} onClick={() => router.push('/')}>
                        <img src={logo.src} alt="Project Rainbow Logo" className={styles.logo} />
                    </div>
                    <div className={styles.page} onClick={() => router.push('/about')}>
                        <a>Meet Our Team</a>
                    </div>
                    <div className={styles.page} onClick={() => router.push('/events')}>
                        <a>Events</a>
                    </div>
                    <div className={styles.page} onClick={() => router.push('/donate')}>
                        <a>Donate</a>
                    </div>
                </nav>
            </div>
            </>  
        )
}