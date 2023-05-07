import Profile from '../components/profile';
import bios from '../fixtures/meet-the-team';

export default function About() {
    return (
        <>
            <div>
                <h1 style={{textAlign: 'center'}}>Who We Are</h1>
                <h4>Project Rainbow is currently a Board of Directors comprised of both individuals who work or
                    volunteer with unhoused individuals who also either identify as LGBTQ+ or
                    stand up as a strong ally for the LGBTQ+ community. Project Rainbow aims to
                    identify and empower unhoused queer folks as leaders of this project and will ultimately aim to
                    employ these individuals in leadership roles as funding allows.</h4>
                <br />
                {bios.map(bio => (
                    <Profile headshot={bio.headshot} bio={bio.bio} name={bio.name} key={bio.name}/>
                ))}
            </div>

        </>
    )
}