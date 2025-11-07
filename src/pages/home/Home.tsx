import { useNavigate } from "react-router-dom";
import CardDevs from "../../components/carddevs/CardDevs";

const Home = () => {
  const navigate = useNavigate();

  const handleCadastrarCorrida = () => {
    navigate("/cadastrarcorrida");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[#FAF9F6]">
        <div className="relative w-full py-20 md:py-0 md:h-[550px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/Disturbedmoss/joey-kyber-45FJgZMXCK8-unsplash.jpg?updatedAt=1762470445952"
            alt="Vista de uma cidade movimentada"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-10 bg-black/50"></div>

          <div className="md:w-1/2 lg:w-3/5 flex flex-col gap-5 sm:items-center md:items-start">
            <h1 className="sm:pt-30 ml-10 sm:absolute sm:top font-bold text-3xl sm:text-6xl z-10 text-white text-shadow-md">
              <p>Viaje com quem vai na mesma direção</p>simples, seguro e econômico.
            </h1>

            <div className='md:absolute ml-10 w-30 h-40 sm:top-90 md:top-85 lg:top-70 md:left-30 z-20'>
              <button
                className="w-40 cursor-pointer font-semibold bg-[#D97652] rounded py-2 hover:bg-[#d65b2e] z-20"
                onClick={handleCadastrarCorrida}
              >
                Cadastrar Corrida
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-40 md:h-28 z-30">
            <svg
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
              className="w-full h-full fill-current text-gray-50"
            >
              <path d="M0,30 Q250,100 500,50 T1000,50 L1000,100 L0,100 Z" />
            </svg>
          </div>
        </div>

        <div className="w-full bg-[#FAF9F6] rounded-t-3xl md:pt-5 flex flex-col justify-center items-center">
          <div className="w-full md:my-10 p-5 justify-center">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-shadow-md">
              Como Funciona
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-center">
              <div className="bg-white grid grid-cols-3 rounded-2xl w-2md border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/City%20driver-rafiki.svg?updatedAt=1762451788880"
                    alt="Motorista publicando no aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="md:text-xl font-bold">
                    Motoristas publicam seu destino
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Junte-se a mais de 500 mil motoristas cadastrados em todo
                    Brasil.
                  </p>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 rounded-2xl w-2md border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/Navigation-pana%20(1).svg?updatedAt=1762451789146"
                    alt="Pessoa usando o aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="md:text-xl font-bold">
                    Passageiros demonstram interesse
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 2 milhões de usuarios ativos
                  </p>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 rounded-2xl w-2md border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/Car%20driving-pana.svg?updatedAt=1762455128383"
                    alt="Motorista publicando no aplicativo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="md:text-xl font-bold">
                    Vocês combinam o valor e seguem juntos
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 20 milhões de viagens já foram realizadas em 2025.
                  </p>
                </div>
              </div>

              <div className="bg-white grid grid-cols-3 rounded-2xl md:w-2md border border-slate-400 shadow-md">
                <div className="bg-[#97bda5] w-full flex justify-center items-center rounded-l-2xl">
                  <img
                    src="https://ik.imagekit.io/Disturbedmoss/Globalization-pana.svg?updatedAt=1762466905736"
                    alt="Pessoas conectadas ao redor do mundo"
                    className="aspect-auto size-50"
                  />
                </div>
                <div className="w-full col-span-2 pl-2 pt-2 gap-4">
                  <h3 className="md:text-xl font-bold">
                    Mobilidade que conecta pessoas e destinos
                  </h3>
                  <p className="text-[#3d3d3d]">
                    Mais de 100 cidades conectadas todos os dias por meio de
                    viagens compartilhadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#6EA87C] py-12 md:px-6 text-white">
            <h2 className="text-4xl font-extrabold mb-12 text-white text-center text-shadow-md">
              Por que usar?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57] truncate">
                  Sustentabilidade
                </h3>
                <p className="text-gray-700">
                  Menos carros na rua, menos poluição. A Terra agradece!
                </p>
              </div>

              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57]">
                  Segurança e Transparência.
                </h3>
                <p className="text-gray-700">
                  Viaje apenas com perfis verificados e avaliados pela
                  comunidade.
                </p>
              </div>

              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57] truncate">
                  Economize
                </h3>
                <p className="text-gray-700">
                  Divida os custos do trajeto e faça seu dinheiro render.
                </p>
              </div>

              <div className="bg-white p-6 shadow-xl rounded-2xl transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2 text-[#468A57] truncate">
                  Flexibilidade Total.
                </h3>
                <p className="text-gray-700">
                  Publique ou encontre seu trajeto exatamente quando precisar.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 w-full lg:4/5 xl:w-9/10 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-extrabold mb-12 text-center text-shadow-md">
              Time de desenvolvimento
            </h2>

            <div className="flex flex-col justify-center">
              <p className=" gap-1 pb-8 text-2xl text-center">
                <span className="text-[#031D40] font-bold">Commit8 </span> é um
                coletivo formado por oito desenvolvedores em início de carreira,
                unidos por um propósito comum: aprender, crescer e construir
                tecnologia com propósito. Acreditamos que cada linha de código
                pode transformar ideias em impacto real e é com essa visão que
                unimos nossas habilidades e criatividade para desenvolver
                soluções inovadoras, colaborativas e acessíveis.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 md:w-4/5 lg:w-full md:grid-cols-2 lg:grid-cols-4">
              <CardDevs
                foto="https://i.postimg.cc/B68Yd9VQ/IMG-3370-1.png"
                nome="Pedro"
                descricao="Definiu a estrutura dos dados dos colaboradores."
                Githublink="https://github.com/pe3dru"
                Linkedinlink="https://www.linkedin.com/in/pedroemanueln/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/mDpBQnpf/AP1Gcz-P13BKj8DKMb-Vd7Wv5-MVlqh-Pyh-b-MZ19v4e-Snwsc6Be-Kligbl-IA7ar-EAw694-h925-s-no-gm.png"
                nome="Dandara"
                descricao="Criou a estrutura inicial do projeto."
                Githublink="https://github.com/dan-olivnas"
                Linkedinlink="https://www.linkedin.com/in/nascimentodandara/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/JnHM5qfw/IMG-20201009-235956-286.png"
                nome="Laish"
                descricao="Gerenciou cadastros e dados dos colaboradores."
                Githublink="https://github.com/L4ish"
                Linkedinlink="https://www.linkedin.com/in/laish-rodrigues/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/0QS1wNSv/IMG-20250315-013235-785.png"
                nome="Gabriella"
                descricao="Agrupou recursos voltados aos colaboradores."
                Githublink="https://github.com/gabiparra05"
                Linkedinlink="https://www.linkedin.com/in/gabriellabgparra/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/QxmCt6sk/foto-apresentacao.png"
                nome="Gabriel"
                descricao="Controlou ações ligadas aos colaboradores."
                Githublink="https://github.com/gabrielmessias-dev"
                Linkedinlink="https://www.linkedin.com/in/gabrielmessias-dev/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/NGpv2Z9p/1746464117666-1.png"
                nome="Akanni"
                descricao="Organizou os módulos principais do sistema."
                Githublink="https://github.com/Akanni-Silva"
                Linkedinlink="https://www.linkedin.com/in/akannisilva/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/QxTSZTrR/perfil-Linkedin.png"
                nome="Janielle"
                descricao="Iniciou o sistema e integrou suas partes."
                Githublink="https://github.com/JanielleOliveira"
                Linkedinlink="https://www.linkedin.com/in/janielleoliveira/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3Bj5MB0lwpSHeBF3z3XjfCIA%3D%3D"
              />
              <CardDevs
                foto="https://i.postimg.cc/2jqg33DH/20230407-153224.png"
                nome="Vitor"
                descricao="Reuniu informações sobre o sistema."
                Githublink="https://github.com/DisturbedMoss"
                Linkedinlink="https://www.linkedin.com/in/vitor-hugo-silva-7b6b14220/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BRAMpA09WQ8C6d7H0I%2BTfxw%3D%3D"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
