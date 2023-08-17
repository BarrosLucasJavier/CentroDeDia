import styles from './footer.module.css'
import facebook from '../../assets/images/icons/facebook.png'
import instagram from '../../assets/images/icons/instagram.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'
import hongo from '../../assets/images/hongo.png'
import rana from '../../assets/images/rana.png'
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <p>Lun a Vie de 8 a 14 hs</p>
            <div className={styles.iconsContainer}>
                <img src={facebook} alt='Facebook'/>
                <img src={instagram} alt='Instagram'/>
                <img src={whatsapp} alt='Whatsapp'/>
            </div>
            <p>Entre Ríos 450 - Bº Otaño</p>
            <img className={styles.hongo} src={hongo}/>
            <img className={styles.rana} src={rana}/>
        </footer>
    );
}

export default Footer;
