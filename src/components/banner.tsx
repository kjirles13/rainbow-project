import image from '../public/rainbow-banner-vertical.png';
import styles from '../styles/Banner.module.css';

export default function Banner() {
    return (
        <div>
            <img src={image.src} alt="rainbow-banner" style={{width: '150px', height: '100%', position: 'fixed', backgroundRepeat: 'repeat', opacity: '75%'}} />
        </div>
    )
}