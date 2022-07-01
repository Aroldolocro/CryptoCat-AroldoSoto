import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Compra Cryptos acá 😎 ."}/>
      <ItemCount stock={5} initial={1} onAdd={(n) => alert("agregados: "+n+" productos.") }/>
    </div>
  );
}

export default App;
