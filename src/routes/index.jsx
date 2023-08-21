import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CatalogoPage from "../pages/catalogo";
import Nosotros from "../pages/nosotros";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/catalogo" element={<CatalogoPage/>}/>
            <Route exact path="/nosotros" element={<Nosotros/>}/>
        </Routes>
    );
}

export default AppRoutes;
