import styles from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>Lun a Vie de 8 a 14 hs</p>
            <div className={styles.iconsContainer}>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faWhatsapp}/>
            </div>
            <p>Entre Ríos 450 - Bº Otaño</p>
        </footer>
    );
}

export default Footer;
