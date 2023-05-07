import facebook from '../public/facebook.png';
import instagram from '../public/instagram.png';
import twitter from '../public/twitter.png';
import email from '../public/email.png';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icons}>
                <div className={styles.elements}>
                    <a href="https://www.facebook.com/people/Project-Rainbow/100088104047306/" target="_blank" >
                        <img src={facebook.src} alt="Facebook" />
                    </a>
                </div>
                <div className={styles.elements}>
                    <a href="https://www.instagram.com/project_rainbow_wv/" target="_blank">
                        <img src={instagram.src} alt="Instagram" />
                    </a>
                </div>
                <div className={styles.elements}>
                    <a href="https://twitter.com/ProjectRainbowW" target="_blank">
                        <img src={twitter.src} alt="Twitter" id={styles.twitter}/>
                    </a>
                </div>
                <div className={styles.elements}>
                    <img src={email.src} alt="Email" id={styles.email} />
                    <p className={styles.label}>projectrainbowwv@gmail.com</p>
                </div>
            </div>
        </div>
    )
}