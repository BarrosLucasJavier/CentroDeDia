import Footer from "../components/footer";
import Header from "../components/header";
import PropTypes from 'prop-types'



const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainLayout;
