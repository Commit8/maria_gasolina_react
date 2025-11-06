import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({
  id: 0,
  veiculo: "",
  taxaGasolina: 0,
});

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) buscarPorId(id);
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
        await atualizar(`/categorias/${categoria.id}`, categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso!");
      }
      navigate("/categorias");
    } catch {
      alert("Erro ao salvar a categoria. Verifique os campos e tente novamente.");
    }
  }

  return (
    <div className="flex justify-center mt-10">
      <form
        className="bg-[#F2E4D8] shadow-md rounded-2xl p-6 w-full max-w-md border border-[#D97652]"
        onSubmit={onSubmit}
      >
        <h1 className="text-2xl font-bold text-center text-[#D97652] mb-4">
          {id ? "Editar Categoria" : "Cadastrar Veículo"}
        </h1>

        <input
          value={categoria.veiculo}
          onChange={atualizarEstado}
          name="veiculo"
          placeholder="Veículo"
          className="border border-[#4D5159] rounded p-2 w-full mb-3 text-[#0D0D0D] bg-[#F2E4D8] placeholder-[#4D5159] focus:outline-none focus:border-[#76A687]"
        />

        <input
          value={categoria.taxaGasolina}
          onChange={atualizarEstado}
          name="taxaGasolina"
          placeholder="Taxa Gasolina"
          type="number"
          className="border border-[#4D5159] rounded p-2 w-full mb-3 text-[#0D0D0D] bg-[#F2E4D8] placeholder-[#4D5159] focus:outline-none focus:border-[#76A687]"
        />

        <button
          type="submit"
          className="bg-[#76A687] text-[#F2E4D8] p-2 w-full rounded hover:bg-[#4D5159] transition font-semibold"
        >
          {id ? "Atualizar" : "Cadastrar"}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;