import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

                                                          
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola, bienvenido'/>}/>
        <Route path='/item/:id'  element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer greeting='Hola, bienvenido'/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
