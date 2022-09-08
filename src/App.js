import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  function handleOnAdd(cantidad) {
    alert(`Agregaste ${cantidad} productos al carrito`)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda Chilli Funko Pop" />
      <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;