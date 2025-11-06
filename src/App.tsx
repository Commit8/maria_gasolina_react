import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CancelarCorrida from "./components/corrida/cancelarcorrida/CancelarCorrida";
import FormCorrida from "./components/corrida/fomsCorrida/FormsCorrida";
import ListaCorrida from "./components/corrida/listacorrida/ListaCorrida";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/atualizarcorrida/:id" element={<FormCorrida />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            <Route path="/corridas" element={<ListaCorrida />} />
            <Route path="/cadastrarcorrida" element={<FormCorrida />} />

            <Route path="/cancelarcorrida/:id" element={<CancelarCorrida />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
