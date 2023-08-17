import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import MainLayout from './layout';
import { ProductsProvider } from './context/products.context';


function App() {

  return (
    <Router>
      <ProductsProvider>
        <MainLayout>
          <AppRoutes/>
        </MainLayout>
      </ProductsProvider>
    </Router>
  )
}

export default App
