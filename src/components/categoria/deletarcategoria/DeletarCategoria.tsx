/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            if (error.toString().includes("401")) {
                navigate("/");
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);

        try {
            await deletar(`/categorias/${id}`);
            ToastAlerta("Categoria apagada com sucesso!", "sucesso");
        } catch (error: any) {
            if (error.toString().includes("401")) {
                navigate("/categorias");
            } else {
                ToastAlerta("Erro ao deletar a categoria.", "erro");
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://ik.imagekit.io/Disturbedmoss/joey-kyber-45FJgZMXCK8-unsplash.jpg?updatedAt=1762470445952')",
            }}
        >
            <div className="bg-[#dfd8f2]/90 border border-[#D97652] rounded-xl shadow-md w-full max-w-md p-8 backdrop-blur-sm">
                <h2 className="text-center text-[#D97652] text-3xl font-bold mb-8">
                    Deletar Categoria
                </h2>

                <div className="mb-6">
                    <p className="text-[#0D0D0D] font-medium text-lg text-center mb-1">
                        {categoria.nome}
                    </p>
                    <p className="text-[#0D0D0D] text-center text-base">
                        {categoria.descricao}
                    </p>
                </div>

                <p className="text-center font-semibold mb-6">
                    Você tem certeza que deseja apagar a categoria{" "}
                    <span className="font-bold text-[#0D0D0D]">
                        {categoria?.veiculo}
                    </span>
                    ?
                </p>

                <div className="flex justify-between gap-4">
                    <button
                        onClick={retornar}
                        className="bg-[#76A687] text-[#F2E4D8] w-1/2 py-2 rounded-md hover:bg-[#4D5159] transition"
                    >
                        Não
                    </button>

                    <button
                        onClick={deletarCategoria}
                        className="bg-[#b85a3d] text-[#F2E4D8] w-1/2 py-2 rounded-md hover:bg-[#4D5159] transition flex items-center justify-center"
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={20} />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
