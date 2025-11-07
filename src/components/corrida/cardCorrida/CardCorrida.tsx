import type Corrida from "../../../models/Corrida";

interface CardCorridaProps {
  corrida: Corrida;
  onEdit?: (id: number) => void;
}

function CardCorrida({ corrida, onEdit }: CardCorridaProps) {
  return (
    <div className="flex flex-col rounded overflow-hidden justify-between">
      {" "}
      <div className="flex gap-5 items-center justify-center">
        <img
          src="https://i.postimg.cc/hP3mFkDb/Motocross-amico-1.png"
          alt=""
          className="aspect-auto size-12"
        />
        <div>
          {" "}
          <h3>Media: {corrida.distancia}Km</h3>
          <p>Data da corrida</p> <p>Valor Sugerido: R${corrida.valorCorrida}</p>
          <hr className="border-[#D97652] w-full" />
        </div>
        <div className=" pl-5 pt-10">
          <button
            onClick={() => onEdit && onEdit(corrida.id)}
            className="text-[#1eaa4f] hover:underline"
            type="button"
          >
            <span>Editar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCorrida;
