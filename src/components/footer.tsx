import { colors } from "@mui/material"
import { blue } from "@mui/material/colors"

export default function Footer() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', background: 'rgb(213, 215, 236)'}}>
        <p> 1234 Rainbow Rd <br />
            Morgantown, WV 25508 <br />
        </p>
        <p> E: projectrainbowwv@gmail.com</p>
        </div>
    )
}