import type { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
    return (
        <>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter>
                    <Navbar />
                    <div className="min-h-[80vh]">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/categoria" element={<Categoria />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route
                                path="/cadastrartema"
                                element={<FormTema />}
                            />
                            <Route
                                path="/atualizarcorrida/:id"
                                element={<FormCorrida />}
                            />

                            <Route
                                path="/corridas"
                                element={<ListaCorrida />}
                            />
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
            </AuthProvider>
        </>
    );
}

export default App;
