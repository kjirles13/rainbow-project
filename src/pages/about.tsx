import Profile from '../components/profile';
import bios from '../fixtures/meet-the-team';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <>
            <div style={{}}>
                <h1 className={styles.title}>Who We Are</h1>
                <h4 className={styles.description}>Project Rainbow is currently a Board of Directors comprised of both individuals who work or
                    volunteer with unhoused individuals who also either identify as LGBTQ+ or
                    stand up as a strong ally for the LGBTQ+ community. Project Rainbow aims to
                    identify and empower unhoused queer folks as leaders of this project and will ultimately aim to
                    employ these individuals in leadership roles as funding allows.</h4>
                <br />
                <div className={styles.profile}>
                    <h1>Our Founding Members</h1>
                    {bios.map(bio => (
                        <Profile headshot={bio.headshot} bio={bio.bio} name={bio.name} key={bio.name} />
                    ))}
                </div>
            </div>

        </>
    )
}