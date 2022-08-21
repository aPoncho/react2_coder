import './App.css';
import Navbar from "./Components/Navbar/Navbar.jsx";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './Components/ItemCount/ItemCount';

                                                          
function App() {

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
