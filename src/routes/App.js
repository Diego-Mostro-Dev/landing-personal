import Home from '../containers/Home.jsx';
import SobreMiMobile from '../components/SobreMiMobile.jsx';
import FormularioMobile from '../components/FormularioMobile.jsx';
import ProyectosMobile from '../components/ProyectosMobile.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/sobre-mi-mobile" element={<SobreMiMobile/>} />
      <Route exact path="/formulario-mobile" element={<FormularioMobile/>} />
      <Route excact path="/proyectos-mobile" element={<ProyectosMobile/>} />  
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
