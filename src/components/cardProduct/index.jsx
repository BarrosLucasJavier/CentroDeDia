import PropTypes from 'prop-types'
import styles from './cardProduct.module.css'


const CardProduct = ({ product }) => {
    

    return (
        <div className={styles.cardContainer}>
            <div>
                <img src={product.imagen}/>
            </div>
            <div className={styles.cardInfo}>
                <h3>{product.nombre}</h3>
                <p>{product.descripcion}</p>
                <span>Precio: $ {product.precio}</span>
            </div>
        </div>
    );
}
CardProduct.propTypes = {
    product: PropTypes.object.isRequired
}
export default CardProduct;
