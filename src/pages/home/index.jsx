
import Catalogo from '../../components/catalogo';
import styles from './home.module.css'

const Home = () => {
    return (
        <main className={styles.homeContainer}>
            <div>
                <Catalogo/>
            </div>
        </main>
    );
}

export default Home;
