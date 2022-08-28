import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Routes/Rutas';

                                                          
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Rutas/>
      </BrowserRouter>
    </div>
  );
}

export default App;
