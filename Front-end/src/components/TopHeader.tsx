import './TopHeader.scss'
import local from '../assets/Local.png';
import email from '../assets/email.png';
import face from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import picsart from '../assets/pisart.png';
import skype from '../assets/skype.png';

function TopHeader() {
    return (
        <div className="topheader">
            <ul>
                <li className="local">
                    <img src={local} alt="Local" />
                    <p>Centro, 15. Lauro de Freitas-BA</p>
                </li>
                <li className="email">
                    <img src={email} alt="email" />
                    <p>suporte@francacoder.com</p>
                </li>
                <li className="icons">
                    <img src={skype} alt="skype" />
                    <img src={face} alt="face" />
                    <img src={picsart} alt="picsart" />
                    <img src={insta} alt="insta" />
                </li>
            </ul>
        </div>
    );
}


export default TopHeader