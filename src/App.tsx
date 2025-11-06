import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import CancelarCorrida from "./components/corrida/cancelarcorrida/CancelarCorrida";
import FormCorrida from "./components/corrida/fomsCorrida/FormsCorrida";
import ListaCorrida from "./components/corrida/listacorrida/ListaCorrida";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

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
                        <Route path="/categoria" element={<Categoria />} />
                        <Route
                            path="/Listacategorias"
                            element={<ListaCategorias />}
                        />
                        <Route
                            path="/cadastrarcategoria"
                            element={<FormCategoria />}
                        />
                        <Route
                            path="/atualizarcategoria"
                            element={<FormCategoria />}
                        />
                        <Route
                            path="/deletarcategoria/:id"
                            element={<DeletarCategoria />}
                        />
                        <Route
                            path="/atualizarcorrida/:id"
                            element={<FormCorrida />}
                        />

                        <Route path="/corridas" element={<ListaCorrida />} />
                        <Route
                            path="/cadastrarcorrida"
                            element={<FormCorrida />}
                        />

                        <Route
                            path="/cancelarcorrida/:id"
                            element={<CancelarCorrida />}
                        />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
