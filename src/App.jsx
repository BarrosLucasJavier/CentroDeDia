import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import MainLayout from './layout';


function App() {

  return (
    <Router>
      <MainLayout>
        <AppRoutes/>
      </MainLayout>
    </Router>
  )
}

export default App
