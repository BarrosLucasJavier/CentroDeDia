import { useProducts } from "../../hooks/products.hooks";
import CardProduct from "../cardProduct";
import styles from './catalogo.module.css'

const Catalogo = () => {
    const { products } = useProducts()
    return (
        <section className={styles.catalogoContainer}>
            {products.map((product , index) =>{
                return <CardProduct key={index} product={product}/>
            })}
        </section>
    );
}

export default Catalogo;
