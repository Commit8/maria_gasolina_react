// import { useNavigate } from "react-router-dom";

const Home = () => {
//   const navigate = useNavigate();

//   const handleCadastrarCorrida = () => {
//     navigate('/cadastrarcorrida')
//   }
  return (
    <>
      <div className="bg-indigo-500 flex flex-col justify-center items-center">
        <h1 className="pt-30 font-bold text-4xl">
          Viaje com quem vai na mesma direção — simples, seguro e econômico.
        </h1>

        <div className="container bg-white mt-40 rounded-t-3xl p-5">
          <div className="w-full bg-pink-500 flex justify-center">
            {/* onClick={handleCadastrarCorrida} coloca dentro do botão */}
            <button className="cursor-pointer">Cadastrar Corrida</button>
          </div>

          <div className="w-full bg-green-900 my-10 p-5">
            <h2 className="font-bold text-2xl">Como Funciona</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Motoristas publicam seu destino</h3>
                Imagem ilustrativa de motorista
              </div>
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Passageiros demonstram interesse</h3>
                Imagem ilustrativa de passageiro
              </div>
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">
                  Vocês combinam o valor e seguem juntos
                </h3>
                Imagem ilustrativa da viagem dos dois
              </div>
            </div>
          </div>

          <div className="w-full bg-green-900 my-10 p-5">
            <h2 className="font-bold text-2xl">Por que usar</h2>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Sustententabilidade</h3>
                <p>Menos carros, menos poluição.</p>
              </div>
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Segurança e transparência.</h3>
                <p>Viaje com pessoas verificadas</p>
              </div>
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Economize</h3>
                <p>Divida os custos da viagem</p>
              </div>
              <div className="bg-white aspect-video p-2">
                <h3 className="font-bold">Flexibilidade total:</h3>
                <p>Publique seu trajeto quando quiser.</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-green-900 my-10 p-5">
            <h2 className="font-bold text-2xl">Sobre Nós</h2>
            Imagens do time
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
