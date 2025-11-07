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
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url('https://i.postimg.cc/zBB0pQTk/pexels-bertellifotografia-799443.jpg')
        `,
      }}
    >
      <div className="max-w-md w-full bg-[#dfd8f2] rounded-2xl shadow-xl border border-[#D97652] overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-3xl font-bold text-[#b85a3d] mb-4">
            Confirmar cancelamento
          </h1>

          <p className="text-gray-700 text-lg mb-8">
            Você tem certeza que deseja cancelar esta corrida de{" "}
            {corrida.distancia} km?
          </p>

          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-3 font-semibold text-white rounded-lg bg-[#76A687] hover:bg-[#5a8a6b] transition-colors"
              onClick={retornar}
            >
              Não, voltar
            </button>

            <button
              className="px-8 py-3 font-semibold flex items-center justify-center rounded-lg text-white bg-[#b85a3d] hover:bg-[#a34225] hover:bg-opacity-80 transition-opacity"
              onClick={cancelarCorrida}
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Sim, cancelar</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelarCorrida;