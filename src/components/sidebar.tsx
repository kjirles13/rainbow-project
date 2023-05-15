import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Raleway:wght@300&display=swap" rel="stylesheet" />
            </head>
            <div className={styles.stats}>
                <h1 className={styles["stats-title"]}>Why we need The Rainbow House</h1>
                <div className={styles.container}>
                    <ul className={styles["stats-list"]}>
                        <li>LGBTQ+ youth are <span className={styles["highlight-container"]}><span className={styles.highlight}>120% </span></span> more likely to experience homelessness in their lifetime</li>
                        <li><span className={styles["highlight-container"]}><span className={styles.highlight}>40% </span></span> of the youth experiencing homelessness identify as LGBTQ+, despite making up <span className={styles["highlight-container"]}><span className={styles.highlight}>10%</span></span> of the population</li>
                        <li><span className={styles["highlight-container"]}><span className={styles.highlight}>38% </span></span> of unsheltered LGBTQ+ youth reported experiencing sexual assault</li>
                        <li><span className={styles["highlight-container"]}><span className={styles.highlight}>62% </span></span> of LGBTQ+ youth experiencing homelessness have reported physical assault</li>
                        <li>LGBTQ+ people are <span className={styles["highlight-container"]}><span className={styles.highlight}>4 times</span></span> more likely than straight, cisgender people to experience violence based on their sexuality or gender identity</li>
                        <li><span className={styles["highlight-container"]}><span className={styles.highlight}>43% </span></span> of unsheltered LGBTQ+ youth report becoming unhoused due to rejection of their sexuality or gender identity by their family</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}