import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Corrida from "../../../models/Corrida";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";

interface FormCorridaProps {
  corridaSelecionada?: import("../../../models/Corrida").default;
  onSubmitSuccess?: () => void; // callback opcional após sucesso no envio
}

function FormCorrida({
  corridaSelecionada,
  onSubmitSuccess,
}: FormCorridaProps) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [corrida, setCorrida] = useState<Corrida>({} as Corrida);

  const { id } = useParams<{ id: string }>();

  async function buscarCorridaPorId(id: string) {
    try {
      await buscar(`/corridas/${id}`, setCorrida);
    } catch (error: any) {
      if (error.toString().includes("400")) {
        navigate("/");
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("400")) {
        navigate("/");
      }
    }
  }

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias);
    } catch (error: any) {
      if (error.toString().includes("400")) {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarCorridaPorId(id);
    }
  }, [id]);

  // Se receber uma corrida selecionada via props (lista), preenche o estado local
  useEffect(() => {
    if (corridaSelecionada) {
      setCorrida(corridaSelecionada);
      // também preenche a categoria local, para manter o select coerente
      if (corridaSelecionada.categoria)
        setCategoria(corridaSelecionada.categoria);
    }
  }, [corridaSelecionada]);

  useEffect(() => {
    setCorrida({ ...corrida, categoria: categoria });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCorrida({
      ...corrida,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/corridas");
  }

  async function gerarNovaCorrida(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Decide atualizar ou cadastrar com base no id presente no estado corrida
    if (id !== undefined) {
      try {
        await atualizar(`/corridas`, corrida, setCorrida);

        ToastAlerta("Corrida atualizada com sucesso", "sucesso");
        onSubmitSuccess?.(); // chama callback se existir
      } catch (error: any) {
        if (error.toString().includes("400")) {
          navigate("/");
        } else {
          ToastAlerta("Erro ao atualizar a Postagem.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/corridas`, corrida, setCorrida);
        ToastAlerta("A Corrida foi cadastrada com sucesso!", "sucesso");
        onSubmitSuccess?.(); // chama callback se existir
      } catch (error: any) {
        if (error.toString().includes("400")) {
          navigate("/");
        } else {
          ToastAlerta("Erro ao cadastrar a Corrida.", "erro");
        }
      }
    }
    setIsLoading(false);
    setCorrida({
      id: null,
      distancia: " ",
      valorCorrida: " ",
      categoria: {} as Categoria,
    });

    setCategoria({} as Categoria);
    ToastAlerta("A Corrida foi cadastrada!", "sucesso");
  }

  const carregandoVeiculo = categoria.veiculo === "";

  return (
    <div className="container flex flex-col mx-auto items-center text-black">
      <h1 className="text-4xl text-center my-8">
        {corrida.id ? "Editar Corrida" : "Cadastrar Corrida"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCorrida}>
        <div className="flex flex-col gap-2">
          <label htmlFor="distancia">Distância proposta em Km:</label>
          <input
            step="0.01" 
            type="number"
            min="0"
            inputMode="decimal"
            placeholder="Insira a distância em Km"
            name="distancia"
            required
            className="border-2 border-[#D97652] rounded p-2"
            value={corrida.distancia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Veículo utilizado</p>
          <select
            name="categoria"
            id="categoria"
            className="border-2 p-2 border-[#D97652] rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um veículo
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.veiculo}</option>
              </>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="valorCorrida">Valor sugerido</label>
          <div className="border-2 p-2 border-[#D97652] rounded text-center">
            <output>{corrida.valorCorrida}</output>
          </div>
        </div>

        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-[#44a666] hover:bg-[#2de06c]
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoVeiculo}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <div>
              <span>{corrida && corrida.id ? "Atualizar" : "Cadastrar"}</span>
            </div>
          )}
        </button>
        {corrida && corrida.id && (
          <Link to={`/cancelarcorrida/${corrida.id}`}>
            {" "}
            <button
              className="rounded disabled:bg-slate-200 bg-[#D97652] hover:bg-[#cf4310]
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
            >
              Cancelar
            </button>
          </Link>
        )}
      </form>
      <img
        src="https://i.postimg.cc/yNF7gMSN/Order-ride-amico-1-1.png"
        alt=""
      />
    </div>
  );
}

export default FormCorrida;
