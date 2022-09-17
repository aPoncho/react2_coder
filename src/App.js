import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Routes/Rutas';
import GlobalProvider from './Context/GlobalProvider';

                                                          
function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Navbar/>
          <Rutas/>
        </BrowserRouter>
      </GlobalProvider>     
    </div>
  );
}

export default App;
