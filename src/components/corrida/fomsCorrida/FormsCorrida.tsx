import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Corrida from "../../../models/Corrida";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { ClipLoader } from "react-spinners";

function FormCorrida() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    veiculo: "",
    taxaGasolina: 0,
  });

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

  async function buscarCategorias(id: string) {
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
    navigate(`/atualizarcorrida/${corrida.id}`);
  }

  async function gerarNovaCorrida(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/corridas`, corrida, setCorrida);

        ToastAlerta("Corrida atualizada com sucesso", "sucesso");
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
      } catch (error: any) {
        if (error.toString().includes("400")) {
          navigate("/");
        } else {
          ToastAlerta("Erro ao cadastrar a Corrida.", "erro");
        }
      }
    }
    setIsLoading(false);
    retornar();
  }

  const carregandoVeiculo = categoria.veiculo === "";

  return (
    <div className="container flex flex-col mx-auto items-center text-black">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Corrida" : "Cadastrar Corrida"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCorrida}>
        <div className="flex flex-col gap-2">
          <label htmlFor="distancia">distancia Km's proposta:</label>
          <input
            type="number"
            placeholder="Selecione o valor em Km's"
            name="distancia"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={corrida.distancia}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Veiculo Utilizado</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Veiculo
            </option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.veiculo}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoVeiculo}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <div>
              {corrida.valorcorrida}
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            </div>
          )}
        </button>
      </form>
      <img
        src="https://i.postimg.cc/yNF7gMSN/Order-ride-amico-1-1.png"
        alt=""
      />
    </div>
  );
}

export default FormCorrida;
