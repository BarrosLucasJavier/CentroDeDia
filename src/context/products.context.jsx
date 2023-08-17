import { createContext, useState } from "react";
import PropTypes from 'prop-types'
import data from '../data/catalogo.json'

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) =>{

    const [products, setProducts] = useState(data);

    const productsValues = {
        products,
        setProducts
    }

    return (
        <ProductsContext.Provider value={productsValues}>
            {children}
        </ProductsContext.Provider>
    )
}
ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired
}