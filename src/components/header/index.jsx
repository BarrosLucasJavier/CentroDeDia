import sol from '../../assets/images/sol.png'
import styles from './header.module.css'
import mariposa from '../../assets/images/mariposa.gif'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <img className={styles.mariposa} src={mariposa}/>
            <div className={styles.titleContainer}>
                <h2>Centro de día</h2>
                <h1>La Novena</h1>
            </div>
            <img className={styles.sol} src={sol} alt="Sol sonriente"/>
        </header>
    );
}

export default Header;
