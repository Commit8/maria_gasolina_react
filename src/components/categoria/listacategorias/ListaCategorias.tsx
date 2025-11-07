import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom"; // 🟩 Import para redirecionar entre telas
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate();

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
    } finally {
      setIsLoading(false);
    }
  }

  //  Quando clicar em editar:  redireciona para o formulário com o ID na URL
  function handleEditar(id: number) {
    navigate(`/editarCategoria/${id}`);
  }

  //  Quando clicar em deletar: exclui e recarrega lista
  async function handleDeletar(id: number) {
    if (confirm("Tem certeza que deseja deletar esta categoria?")) {
      await deletar(`/categorias/${id}`);
      buscarCategorias(); 
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start 
     bg-[url('https://ik.imagekit.io/Disturbedmoss/joey-kyber-45FJgZMXCK8-unsplash.jpg?updatedAt=1762470445952')] 
  bg-cover bg-center bg-no-repeat p-8">
      <div className="container max-w-5xl bg-[#F2E4D8]/90 border-4 border-[#D97652] rounded-3xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#D97652]">Lista de Categorias</h1>

          {/* Botão para cadastrar nova categoria */}
          <button
            onClick={() => navigate("/cadastrarcategoria")}
            className="bg-[#76A687] text-[#F2E4D8] px-4 py-2 rounded hover:bg-[#4D5159] transition"
          >
            + Nova Categoria
          </button>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <SyncLoader color="#62A18B" size={24} />
          </div>
        )}

        {!isLoading && categorias.length === 0 && (
          <span className="text-xl text-center block my-8">Nenhuma Categoria encontrada!</span>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria) => (
            <CardCategoria
              key={categoria.id}
              categoria={categoria}
              onEditar={() => handleEditar(categoria.id)} 
              onDeletar={() => handleDeletar(categoria.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
