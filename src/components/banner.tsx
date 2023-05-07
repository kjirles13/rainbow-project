import image from '../public/rainbow-banner.png';
import styles from '../styles/Banner.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src={image.src} alt="rainbow-banner" className={styles.image} />
        </div>
    )
}