import styles from '../styles/Profile.module.css';

interface Props {
    headshot: string,
    bio: string,
    name: string
}

export default function Profile({ headshot, bio, name }: Props) {
    return (
        <>
            <div className={styles['headshot-container']}>
                <img src={headshot} alt="Headshot" className={styles.headshot} />
                <div>
                    <h2 className={styles.name}>{name}</h2>
                    <p>{bio}</p>
                </div>
            </div>
        </>
    )
}