import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
  onEditar: () => void;
  onDeletar: () => void;
}

function CardCategoria({ categoria, onEditar}: CardCategoriaProps) {
  return (
    <div className="bg-[#dfd8f2] p-6 rounded-2xl shadow-md border border-[#D97652] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-[#D97652] mb-2 text-center">
          {categoria.veiculo}
        </h3>
        <p className="text-[#0D0D0D] text-center">
          Taxa Gasolina: R${categoria.taxaGasolina}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <button
          onClick={onEditar}
          className="bg-[#76A687] text-[#F2E4D8] px-3 py-2 rounded-md hover:bg-[#4D5159] w-1/2"
        >
          Editar
        </button>
        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="bg-[#0D0D0D] text-[#F2E4D8] text-center px-4 py-2 rounded-md hover:bg-[#4D5159] w-1/2 transition"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
