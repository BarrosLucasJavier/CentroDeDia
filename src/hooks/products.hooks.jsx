import { useContext } from "react";
import { ProductsContext } from "../context/products.context";


export function useProducts () {
    return useContext(ProductsContext)
}