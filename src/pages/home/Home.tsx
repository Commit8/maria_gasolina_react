 import { useNavigate } from "react-router-dom";

const Home = () => {
     const navigate = useNavigate();

     const handleCadastrarCorrida = () => {
       navigate('/cadastrarcorrida')
     }
  return (
    <>
      <div className="bg-indigo-500 flex flex-col justify-center items-center">
        <h1 className="pt-30 font-bold text-4xl">
          Viaje com quem vai na mesma direção — simples, seguro e econômico.
        </h1>

        <div className="container bg-white mt-40 rounded-t-3xl pt-5">
          <div className="w-full flex justify-center">
            <button className="w-40 cursor-pointer bg-pink-500 rounded py-2 hover:bg-pink-700" onClick={handleCadastrarCorrida}>
              Cadastrar Corrida
            </button>
          </div>

          <div className="w-full my-10 p-5 justify-center">
            <h2 className="font-bold text-2xl pb-10">Como Funciona</h2>
            <div className="grid grid-rows-3 gap-2 justify-center">
              <div className="bg-white grid grid-cols-3 rounded-2xl w-2xl border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/City%20driver-rafiki.svg?updatedAt=1762451788880"
                    alt="Motorista publicando no aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="font-bold">Motoristas publicam seu destino</h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 500 mil motoristas cadastrados em todo Brasil
                  </p>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 rounded-2xl w-2xl border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/Navigation-pana%20(1).svg?updatedAt=1762451789146"
                    alt="Pessoa usando o aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="font-bold">
                    Passageiros demonstram interesse
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 2 milhões de usuarios ativos
                  </p>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 rounded-2xl w-2xl border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/Car%20driving-pana.svg?updatedAt=1762455128383"
                    alt="Motorista publicando no aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="font-bold">
                    Vocês combinam o valor e seguem juntos
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 1 milhão de usuarios ativos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#6EA87C] py-12 px-6 text-white">
            {/* Cor de fundo levemente mais vibrante e padding vertical maior */}

            <h2 className="text-4xl font-extrabold mb-12 text-white text-center text-shadow-md">
              {/* Título maior, negrito e centralizado. Usei um amarelo como contraste! */}
              Por que usar?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Usando gap maior e centralizando o grid em telas grandes */}

              {/* Cartão de Sustentabilidade */}
              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57]">
                  Sustentabilidade
                </h3>
                <p className="text-gray-700">
                  Menos carros na rua, menos poluição. A Terra agradece!
                </p>
              </div>

              {/* Cartão de Segurança */}
              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57]">
                  Segurança e Transparência.
                </h3>
                <p className="text-gray-700">
                  Viaje apenas com perfis verificados e avaliados pela
                  comunidade.
                </p>
              </div>

              {/* Cartão de Economia */}
              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57]">
                  Economize
                </h3>
                <p className="text-gray-700">
                  Divida os custos do trajeto e faça seu dinheiro render.
                </p>
              </div>

              {/* Cartão de Flexibilidade */}
              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57]">
                  Flexibilidade Total.
                </h3>
                <p className="text-gray-700">
                  Publique ou encontre seu trajeto exatamente quando precisar.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-5">
            <h2 className="font-bold text-2xl pb-10">Sobre Nós</h2>
            Imagens do time
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
