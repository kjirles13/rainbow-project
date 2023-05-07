import Profile from '../components/profile';
import bios from '../fixtures/meet-the-team';

export default function About() {
    return (
        <>
            <div>
                <h1 style={{textAlign: 'center'}}>Who We Are</h1>
                <br />
                {bios.map(bio => (
                    <Profile headshot={bio.headshot} bio={bio.bio} name={bio.name} key={bio.name}/>
                ))}
            </div>

        </>
    )
}