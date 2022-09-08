import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Tienda Chilli Funko Pop" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
