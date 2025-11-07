import type Corrida from "../../../models/Corrida";

interface CardCorridaProps {
  corrida: Corrida;
  onEdit?: (id: number) => void;
}

function CardCorrida({ corrida, onEdit }: CardCorridaProps) {
  const data = new Date().getTime()
  return (
    <div className="flex flex-col rounded overflow-hidden justify-between">
      {" "}
      <div className="flex gap- items-center justify-center">
        <img
          src="https://i.postimg.cc/hP3mFkDb/Motocross-amico-1.png"
          alt=""
          className="aspect-auto size-12"
        />
        <div className=" w-full mx-9">
          {" "}
          <h3>Distancia Media: {corrida.distancia} Km</h3>
          <p>Criado em {new Intl.DateTimeFormat("pt-br", {
              dateStyle: "medium",
              timeStyle: "medium",
            }).format(new Date(data))}</p> 
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
