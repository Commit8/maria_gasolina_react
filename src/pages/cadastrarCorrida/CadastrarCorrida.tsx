import DadosCliente from "../../components/corrida/dadoscCientes/DadosCliente";
import FormCorrida from "../../components/corrida/fomsCorrida/FormsCorrida";


function CadastrarCorrida() {

    
  return (
    <>
      <div className="bg-[#F5F3F4] flex justify-center h-screen">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <div className="flex justify-around gap-4 w-full">
              <FormCorrida />
            </div>
          </div>

          <div className="grid justify-center items-center">
            
            <div className="rounded-3xl bg-black min-w-1/3 flex flex-col p-3 gap-3">
            <DadosCliente/>
            <DadosCliente/>
            <DadosCliente/>
            <DadosCliente/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastrarCorrida;
