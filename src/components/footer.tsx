import Link from 'next/link';
import facebook from '../public/facebook.png';
import instagram from '../public/instagram.png';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/people/Project-Rainbow/100088104047306/" target="_blank" >
                    <img src={facebook.src} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/project_rainbow_wv/" target="_blank">
                    <img src={instagram.src} alt="Instagram" />
                </a>
            </div>
            <div className={styles.contact}>
                <p className={styles.elements}> 1234 Rainbow Rd <br />
                    Morgantown, WV 25508 <br />
                </p>
                <p className={styles.elements}> E: projectrainbowwv@gmail.com <br />T: (123) 456-7890</p>
            </div>
        </div>
    )
}