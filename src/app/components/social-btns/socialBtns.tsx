import GitHubIcon from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import LikedInIcon from "../icons/linkedin-icon";
import XIcon from "../icons/twitter-icon";
import './social-btns.scss'

export default function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.linkedin.com/in/felipe-hardmann/">
                <LikedInIcon/>
            </a>
            <a href="https://github.com/FelipeHardmann">
                <GitHubIcon/>
            </a>
            <a href="https://twitter.com/fe_hardmann">
                <XIcon/>
            </a>
            <a href="">
                <InstaIcon/>
            </a>
        </div>
    )
}