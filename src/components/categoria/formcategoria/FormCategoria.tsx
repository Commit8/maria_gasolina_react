import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    veiculo: "",
    taxaGasolina: "",
  });

  const navigate = useNavigate(); 
  const { id } = useParams(); 

  
  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);


  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCategoria({
      ...categoria,
      [name]: name === "taxaGasolina" ? Number(value) : value,
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }

      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao salvar a categoria. Verifique os campos e tente novamente.", "erro");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center 
     bg-[url('https://ik.imagekit.io/Disturbedmoss/joey-kyber-45FJgZMXCK8-unsplash.jpg?updatedAt=1762470445952')] 
  bg-cover bg-center bg-no-repeat p-8">
      <form
        onSubmit={onSubmit}
        className="bg-[#F2E4D8] shadow-md rounded-2xl p-6 w-full max-w-lg border border-[#D97652]"
      >
        <h1 className="text-2xl font-bold text-center text-[#D97652] mb-4">
          {id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
        </h1>

        <input
          value={categoria.veiculo}
          onChange={atualizarEstado}
          name="veiculo"
          placeholder="Veículo"
          required
          className="border border-[#4D5159] rounded p-2 w-full mb-3 bg-[#F2E4D8] text-[#0D0D0D] placeholder-[#4D5159]"
        />

        <input
          value={categoria.taxaGasolina === 0 ? "" : categoria.taxaGasolina}
          onChange={atualizarEstado}
          name="taxaGasolina"
          placeholder="Taxa Gasolina (R$)"
          type="number"
          required
          className="border border-[#4D5159] rounded p-2 w-full mb-3 bg-[#F2E4D8] text-[#0D0D0D] placeholder-[#4D5159]"
        />

        <button
          type="submit"
          className="bg-[#76A687] text-[#F2E4D8] p-2 w-full rounded hover:bg-[#4D5159] transition font-semibold"
        >
          {id !== undefined ? "Atualizar" : "Cadastrar"}
        </button>

        {/*Botão para voltar sem salvar */}
        <button
          type="button"
          onClick={() => navigate("/categorias")}
          className="mt-3 border border-[#4D5159] text-[#4D5159] p-2 w-full rounded hover:bg-[#4D5159] hover:text-[#F2E4D8] transition"
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
