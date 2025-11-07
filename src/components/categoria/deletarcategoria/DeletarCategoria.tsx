/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes("401")) {
                navigate("/");
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);
            ToastAlerta("Categoria apagada com sucesso!", "sucesso");
        } catch (error: any) {
            if (error.toString().includes("401")) {
                navigate("/categorias");
            } else {
                ToastAlerta("Erro ao deletar a categoria.", "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="bg-[#F2E4D8] p-6 rounded-2xl shadow-md flex flex-col justify-between border border-[#D97652]">
  <div>
    <h3 className="text-2xl font-bold text-[#D97652] mb-2 text-center">
      {categoria.veiculo}
    </h3>
    <p className="text-[#0D0D0D] text-center text-xl">{categoria.taxaGasolina}</p>
  </div>

  <p className="text-center font-semibold mt-4 mb-2">
    Você tem certeza que deseja apagar essa categoria?
  </p>

  <div className="flex justify-center gap-4 mt-4">
    <button
      className="bg-[#D97652] text-[#F2E4D8] px-4 py-2 rounded-md hover:bg-[#b85a3d] transition w-1/2"
      onClick={retornar}
    >
      Não
    </button>

    <button
      className="bg-[#0D0D0D] text-[#F2E4D8] px-4 py-2 rounded-md hover:bg-[#4D5159] transition w-1/2 flex items-center justify-center"
      onClick={deletarCategoria}
    >
      {isLoading ? (
        <ClipLoader color="#ffffff" size={24} />
      ) : (
        <span>Sim</span>
      )}
    </button>
  </div>
</div>
    );
}

export default DeletarCategoria;
