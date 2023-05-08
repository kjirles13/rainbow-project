import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <>
            <h1 className={styles["stats-title"]}>The Stats</h1>
            <div className={styles.container}>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                    <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Raleway:wght@300&display=swap" rel="stylesheet" />
                </head>
                <ul className={styles["stats-list"]}>
                    <li>LGBTQ+ youth are <strong>120% </strong>more likely to experience homelessness in their lifetime</li>
                    <li><strong>40% </strong> of the youth experiencing homelessness identify as LGBTQ+, despite making up <strong>10% </strong>of the population</li>
                    <li><strong>38%</strong> of unsheltered LGBTQ+ youth reported experiencing sexual assault</li>
                    <li><strong>62%</strong> of LGBTQ+ youth experiencing homelessness have reported physical assault</li>
                    <li>LGBTQ+ people are <strong>4 times </strong> more likely than straight, cisgender people to experience violence based on their sexuality or gender identity</li>
                    <li><strong>43%</strong> of unsheltered LGBTQ+ youth report becoming unhoused due to rejection of their sexuality or gender identity by their family</li>
                </ul>
            </div>
        </>
    )
}