import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>Lun a Vie de 8 a 14 hs</p>
            <div className={styles.iconsContainer}>
            <Link to={'https://www.facebook.com/people/Centro-de-D%C3%ADa-La-Novena/100066680851586/'} target="_blank">
                <FontAwesomeIcon icon={faFacebook}/>
            </Link>
            <Link to={'https://www.instagram.com/centro2104'} target="_blank" >
                <FontAwesomeIcon icon={faInstagram}/>
            </Link>
            <Link to={'https://wa.me/2995350417'} target="_blank">
                <FontAwesomeIcon icon={faWhatsapp}/>
            </Link>
            </div>
            <p>Entre Ríos 450 - Bº Otaño</p>
        </footer>
    );
}

export default Footer;
