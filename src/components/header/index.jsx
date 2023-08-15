import sol from '../../assets/images/sol.png'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <h2>Centro de día</h2>
            <h1>La Novena</h1>
            <img src={sol} alt="Sol sonriente"/>
        </header>
    );
}

export default Header;
