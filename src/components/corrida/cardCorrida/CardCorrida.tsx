import { useEffect, useState } from "react";
import type Corrida from "../../../models/Corrida";

interface CardCorridaProps {
  corrida: Corrida;
  onEdit?: (id: number) => void;
}

function CardCorrida({ corrida, onEdit }: CardCorridaProps) {
  const [dataCriacao, setDataCriacao] = useState<number | null>(null);

  useEffect(() => {
    const chave = `corrida_${corrida.id}_data`;
    const existente = localStorage.getItem(chave);

    if (existente) {
      setDataCriacao(Number(existente));
    } else {
      const agora = Date.now();
      localStorage.setItem(chave, String(agora));
      setDataCriacao(agora);
    }
  }, [corrida.id]);

  return (
    <div className="flex flex-col rounded my-3 justify-between">
      {" "}
      <div className="flex gap- items-center justify-center">
        <img
          src="https://i.postimg.cc/hP3mFkDb/Motocross-amico-1.png"
          alt=""
          className="aspect-auto size-12"
        />
        <div className=" w-full mx-9">
          {" "}
          <p>Veículo escolido: {corrida.categoria?.veiculo}</p>
          <p>Distancia Media: {corrida.distancia} Km</p>
          <p>
            Criado em{" "}
            {new Intl.DateTimeFormat("pt-br", {
              dateStyle: "medium",
              timeStyle: "medium",
            }).format(new Date(dataCriacao))}
          </p>
          <p>Valor Sugerido: R${corrida.valorCorrida}</p>
          <hr className="border-white w-full" />
        </div>

        <button
          onClick={() => onEdit && onEdit(corrida.id)}
          className="mt-10 rounded disabled:bg-slate-200 bg-[#D97652] hover:bg-[#cf4310]
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center "
          type="button"
        >
          <span>Editar</span>
        </button>
      </div>
    </div>
  );
}

export default CardCorrida;
