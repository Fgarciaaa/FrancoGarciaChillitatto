import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda Chilli Funko Pop" />

    </div>
  );
}

export default App;