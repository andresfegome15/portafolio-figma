import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./style/home.css";
import { Navbar, Footer, Loading } from "./componentes/index";
import { Abautme, Contact, Home, Perfil } from "./pages/index";
import { useSelector } from "react-redux";

function App() {
  const loadin = useSelector(state => state.loading);
  return (
    <div className='App'>
      <HashRouter>
        <Navbar />
        {loadin && <Loading />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/abautme' element={<Abautme />} />
          <Route path='/proyecto' element={<Perfil />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
