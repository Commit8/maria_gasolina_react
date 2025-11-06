

function DadosCliente() {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-10 rounded-full">
          <img
            src="https://i.postimg.cc/JnHM5qfw/IMG-20201009-235956-286.png"
            alt=""
          />
        </div>
        <div>
          <p>Nome passageiro</p> <p>Previsão:</p>
        </div>
        <p>Partida:</p>
        <p>Destina: </p>
      </div>
      <hr className="border-slate-800 w-full" />
    </>
  );
}

export default DadosCliente;
