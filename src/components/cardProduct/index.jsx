import PropTypes from 'prop-types'
import styles from './cardProduct.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const CardProduct = ({ product }) => {
    const [modalOpen, setModalOpen] = useState(false);
    

    return (
        <div className={styles.cardContainer}>
        {modalOpen && (
            <div className={styles.modal}>
                <FontAwesomeIcon className={styles.closeModal} onClick={() => setModalOpen(!modalOpen)} icon={faClose}/>
                <img src={product.imagen}/>
            </div>
        )}
            <div className={styles.imgContainer}>
                <img className={styles.productImg} onClick={()=>setModalOpen(!modalOpen)} src={product.imagen}/>
                {product.vendido && (<div className={styles.soldOut}>Por Encargo</div>)}
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
