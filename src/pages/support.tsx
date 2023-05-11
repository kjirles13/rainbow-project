import React from 'react';
import styles from '../styles/Support.module.css';
import shirtImage from '../public/shop-project-rainbow.png';
import mugImage from '../public/mug.png';

export default function Support() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.heading}>Donate to our GoFundMe</h1>
                {/* <iframe src="https://static.ada.support/embed2.eca8973.js" title='GoFundMe' frameBorder="0" className={styles.iframe}></iframe> */}
                <embed  src="https://www.gofundme.com/f/help-us-open-the-rainbow-house/widget/large" type="text/html" className={styles.widget}></embed>
            </div>
            <div className={styles.store}>
                <h1 className={styles.heading}>Buy Merch</h1>
                <div>
                    <h2 className={styles["shop-title"]}>Shirts and Hoodies</h2>
                    <a href="https://www.bonfire.com/store/project-rainbow/" target='_blank'>
                        <img src={shirtImage.src} alt="Store-Shirts and Hoodies" className={styles.shirts} />
                    </a>
                </div>
                <div>
                    <h2 className={styles["shop-title"]}>Stickers, Mugs, and More!</h2>
                    <a href="https://projectrainbow.threadless.com/" target='_blank' >
                        <img src={mugImage.src} alt="Mugs and Accessories" className={styles.mug}/>
                    </a>
                </div>

            </div>
        </div>
    )
}
