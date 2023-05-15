import styles from '../styles/Profile.module.css';

interface Props {
    headshot: string,
    bio: string,
    name: string,
    order: number
}

export default function Profile({ headshot, bio, name, order}: Props) {
    return (
        <>
            <div className={styles['headshot-container']}>
                <img src={headshot} alt="Headshot" className={styles.headshot} style={{order: order}}/>
                <div>
                    <h2 className={styles.name}>{name}</h2>
                    <p>{bio}</p>
                </div>
            </div>
        </>
    )
}