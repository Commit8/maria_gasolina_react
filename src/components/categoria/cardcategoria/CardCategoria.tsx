import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  
  return (
    <div className="bg-[#F2E4D8] p-6 rounded-2xl shadow-md flex flex-col justify-between border border-[#D97652]">
      <div>
        <h3 className="text-2xl font-bold text-[#D97652] mb-2 text-center">
          {categoria.veiculo}
        </h3>
        <p className="text-[#0D0D0D] text-center">{categoria.veiculo}</p>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="bg-[#76A687] text-[#F2E4D8] px-4 py-2 rounded-md hover:bg-[#4D5159] transition"
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="bg-[#0D0D0D] text-[#F2E4D8] px-4 py-2 rounded-md hover:bg-[#4D5159] transition"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
