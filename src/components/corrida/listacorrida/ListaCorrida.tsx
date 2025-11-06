import { useEffect, useState } from "react";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";
import type Corrida from "../../../models/Corrida";
// import {ToastAlerta} from "../../../utils/ToastAlerta"

const ListaCorrida = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [corridas, setCorridas] = useState<Corrida[]>([]);

    useEffect(() => {
        buscarCorridas();
    }, [corridas.length]);

    async function buscarCorridas() {
        try{
            setIsLoading(true);

            await buscar("/corridas", setCorridas)
        } catch(error: any){
            alert('não há Corridas')
            // ToastAlerta("Não há Corridas!", 'erro')
        } finally{
            setIsLoading(false);
        }
    }
    
  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && corridas.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma corrida foi encontrada
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corridas.map((corrida) => (
              <CardCorrida key={corrida.id} corrida={corrida} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCorrida