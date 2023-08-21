import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.css'
import { faBars, faCodeCommit, faX } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';

const Header = () => {

    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const displayNone = openMenu ? styles.menuContainer : styles.disable


    const handleHome = () => {
        setOpenMenu(!openMenu)
        navigate("/")
    }
    const handleCatalogo = () => {
        setOpenMenu(!openMenu)
        navigate("/catalogo")
    }
    const handleNosotros = () => {
        setOpenMenu(!openMenu)
        navigate("/nosotros")
    }

    return (
        <header className={styles.headerContainer}>
        <div className={styles.visibleHeader}>
            <div className={styles.titleContainer}>
                <h1>La Novena</h1>
                <h2>Centro de día</h2>
            </div>
            {openMenu ? 
            <FontAwesomeIcon onClick={()=> setOpenMenu(!openMenu)} className={styles.xIcon} icon={faX}/> :
            <FontAwesomeIcon onClick={()=> setOpenMenu(!openMenu)} className={styles.barIcon} icon={faBars}/>
            } 
            
        </div>
        <div className={`${styles.menuContainer} ${displayNone}`}>
            <p onClick={handleHome}>Inicio</p>
            <FontAwesomeIcon icon={faCodeCommit}/>
            <p onClick={handleCatalogo}>Catalogo</p>
            <FontAwesomeIcon icon={faCodeCommit}/>
            <p onClick={handleNosotros}>Sobre Nosotros</p>
        </div>
        </header>
    );
}

export default Header;
