import Profile from '../components/profile';
import bios from '../fixtures/meet-the-team';
import styles from '../styles/About.module.css';
import photo from '../public/group-photo.jpg';

export default function About() {
    return (
        <>
            <div>
                {/* <h1 className={styles.title}>Who We Are</h1> */}
                <br />
                <img src={photo.src} alt="Project Rainbow Group Photo" className={styles["group-photo"]}/>
                <p className={styles.description}>Project Rainbow is currently a Board of Directors comprised of both individuals who work or
                    volunteer with unhoused individuals who also either identify as LGBTQ+ or
                    stand up as a strong ally for the LGBTQ+ community. Project Rainbow aims to
                    identify and empower unhoused queer folks as leaders of this project and will ultimately aim to
                    employ these individuals in leadership roles as funding allows.</p>
                <br />
                <div className={styles.profile}>
                    <h1>Our Founding Members</h1>
                    {bios.map(bio => (
                        <Profile headshot={bio.headshot} bio={bio.bio} name={bio.name} order={bio.order} key={bio.name} />
                    ))}
                </div>
            </div>

        </>
    )
}