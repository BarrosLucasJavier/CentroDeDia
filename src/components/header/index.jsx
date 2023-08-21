import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.css'
import { faBars, faCodeCommit, faX } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const [showMenu, setShowMenu] = useState(window.matchMedia("(min-width: 700px)").matches);
    const navigate = useNavigate();

    const handleHome = () => {
        setShowMenu(!showMenu)
        navigate("/")
    }
    const handleCatalogo = () => {
        setShowMenu(!showMenu)
        navigate("/catalogo")
    }
    const handleNosotros = () => {
        setShowMenu(!showMenu)
        navigate("/nosotros")
    }

    useEffect(() => {
        if (window.matchMedia("(min-width: 700px)").matches) {
            setShowMenu(true)
        }
        window
            .matchMedia("(min-width: 700px)")
            .addEventListener('change', e => { setShowMenu(e);})
    }, []);

    return (
        <header className={styles.headerContainer}>
        <div className={styles.visibleHeader}>
            <div className={styles.titleContainer}>
                <h1>La Novena</h1>
                <h2>Centro de día</h2>
            </div>
            {showMenu ?
                <FontAwesomeIcon onClick={()=>setShowMenu(!showMenu)} className={styles.xIcon} icon={faX}/> 
                :
                <FontAwesomeIcon onClick={()=>setShowMenu(!showMenu)} className={styles.barIcon} icon={faBars}/>
            }
            
            
        </div>
        {showMenu &&  (
            <div className={styles.menuContainer}>
                <p onClick={handleHome}>Inicio</p>
                <FontAwesomeIcon icon={faCodeCommit}/>
                <p onClick={handleCatalogo}>Catalogo</p>
                <FontAwesomeIcon icon={faCodeCommit}/>
                <p onClick={handleNosotros}>Sobre Nosotros</p>
            </div>
        )}
        </header>
    );
}

export default Header;
