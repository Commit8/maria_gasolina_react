import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Corrida from "../../../models/Corrida";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function CancelarCorrida() {
  const navigate = useNavigate();

  const [corrida, setCorrida] = useState<Corrida>({} as Corrida);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/corridas/${id}`, setCorrida);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta(error, "erro");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function cancelarCorrida() {
    setIsLoading(true);

    // Como não vamos alterar no backend, apenas simulamos a alteração no frontend
    setCorrida({
      ...corrida,
      cancelada: true,
    });

    ToastAlerta("Corrida cancelada.", "sucesso");
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/corridas");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Cancelar corrida</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja cancelar essa corrida?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <div className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Corrida
        </div>

        <p className="p-8 text-3xl bg-slate-200 h-full">
          {corrida.distancia} km
        </p>

        <div className="flex">
          <button
            className="w-full py-3 font-semibold text-white 
               bg-[#0E5E5A] hover:bg-[#0b4a47] transition-colors"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full py-3 font-semibold flex items-center justify-center 
               text-white bg-[#e48a4a] hover:bg-[#e65f00] transition-colors"
            onClick={cancelarCorrida}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CancelarCorrida;
