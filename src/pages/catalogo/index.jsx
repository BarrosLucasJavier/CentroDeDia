import Catalogo from "../../components/catalogo";
import styles from './catalogo.module.css'
import hongo from '../../assets/images/hongo.png'
import mariposa from '../../assets/images/mariposa.gif'
import sol from '../../assets/images/sol.png';

const CatalogoPage = () => {
    return (
        <main className={styles.catalogoContainer}>
            <h1><img className={styles.mariposa} src={mariposa}/>Juegos Didácticos La Novena</h1>
            <img src={hongo}/>
            <div className={styles.infoContainer}>
                <p>Los juguete son creados por los usuarios del centro, en madera.</p>
                <img className={styles.sol} src={sol}/>
                <p>Podes acercarte a nuestra dirección Entre Ríos 450 del barrio Otaño para comprar.</p>
            </div>

            <Catalogo/>
        </main>
    );
}

export default CatalogoPage;
