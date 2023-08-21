
import styles from './home.module.css'
import salud from '../../assets/images/mentalHealt.jpg'
import juguete from '../../assets/images/juguetes.jpg'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handleCatalogo = () => {
        return navigate('/catalogo')
    }

    const handleNosotros = () => {
        return navigate('/nosotros')
    }


    return (
        <main className={styles.homeContainer}>
            <div className={styles.cardContainer}>
                <img src={salud} />
                <div className={styles.glass}></div>
                <div className={styles.infoContainer}>
                    <p>Centro de día “La Novena”: Seis años de compromiso y dedicación en el abordaje integral y acompañamiento a personas...</p>
                    <button onClick={handleNosotros}>Ver mas</button>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <img src={juguete} />
                <div className={styles.glass}></div>
                <div className={styles.infoContainer}>
                    <p>VENTA DE JUGUETES: <br />Fabricados en madera por los usuarios del centro de día</p>
                    <button onClick={handleCatalogo}>Ver mas</button>
                </div>
            </div>
        </main>
    );
}

export default Home;
