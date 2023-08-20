import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import CatalogoPage from "../pages/catalogo";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/catalogo" element={<CatalogoPage/>}/>
        </Routes>
    );
}

export default AppRoutes;
