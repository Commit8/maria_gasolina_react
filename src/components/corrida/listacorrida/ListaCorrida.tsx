import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import type Corrida from "../../../models/Corrida";
import CardCorrida from "../cardCorrida/CardCorrida";
import FormCorrida from "../fomsCorrida/FormsCorrida";
import { ToastAlerta } from "../../../utils/ToastAlerta";


const ListaCorrida = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [corridas, setCorridas] = useState<Corrida[]>([]);
  const [corridaSelecionada, setCorridaSelecionada] = useState<Corrida | null>(
    null
  );

  useEffect(() => {
    buscarCorridas();
  }, [corridas.length]);

  async function buscarCorridas() {
    try {
      setIsLoading(true);

      await buscar("/corridas", setCorridas);
    } catch (error: any) {
      ToastAlerta("Não há Corridas!", 'erro')
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="##D97652" size={32} />
        </div>
      )}
      <div className="justify-center text-center py-6 font-bold text-3xl">
        <h2>Atividade</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="rounded-3xl bg-white border-[#D97652] border min-w-1/3 flex flex-col p-3 my-6 gap-3 text-black">
          {/* div 42: local para o formulário que será preenchido ao clicar em Editar */}
          <FormCorrida corridaSelecionada={corridaSelecionada ?? undefined} />
        </div>

        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            {!isLoading && corridas.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhuma corrida foi encontrada
              </span>
            )}
            <div className="grid grid-cols-1 gap-3 rounded-3xl bg-white  min-w-1/3  p-3  text-black">
              {corridas.map((corrida) => (
                <CardCorrida
                  key={corrida.id}
                  corrida={corrida}
                  onEdit={(id) => {
                    const encontrada =
                      corridas.find((c) => c.id === id) ?? null;
                    setCorridaSelecionada(encontrada);
                    // scroll para o formulário (opcional)
                    const el = document.querySelector(".rounded-3xl");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaCorrida;
