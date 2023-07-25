import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './paginas/Home';
import Contactos from './paginas/Contactos';
import Produtos from './paginas/Produtos';
import Carrinho from './paginas/Carrinho';
import LoginPage from './paginas/LoginPage';
import Menu from './Menu';


function App() {
  return (
    <>
      <Menu/>


      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Contactos" element={<Contactos/>} />
        <Route path="/Produtos" element={<Produtos/>} />
        <Route path="/Carrinho" element={<Carrinho/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
      </>
  );
}

export default App;