import logo from '../images/logo1.png'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer>
            <div className="footer">
                <ul className="footer-list">
                    <li className="footer__item"><a href="/#" className="footer__link">Privacy</a></li>
                    <li className="footer__item"><a href="/#" className="footer__link">Contact us</a></li>
                    <li className="footer__item"><a href="/#" className="footer__link">Help Center</a></li>
                </ul>
                <ul className="footer-list">
                    <li className="footer__item"><a href="/#" className="footer__link">Terms of Use</a></li>
                    <li className="footer__item"><a href="/#" className="footer__link">Gift Cards</a></li>
                    <li className="footer__item"><a href="/#" className="footer__link">Cookies Preferences</a></li>
                </ul>
            </div>
            <span className="copyright">&copy; 2021 by <a className="footer__link" href="https://github.com/AzizKurbanaliyev"> Aziz Kurbanaliyev </a> </span >
        </footer>
    )
}


export default Footer 