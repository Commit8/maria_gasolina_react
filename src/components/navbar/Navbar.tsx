function Navbar() {
    return (
        <>
            <div className="w-full flex bg-[linear-gradient(135deg,#4D5159_0%,#76A687_40%,#D97652_100%)] text-white font-yusei">

                <div className="w-full flex items-center justify-between"> 

                    <div className="flex items-center">
                        <img src="https://i.imgur.com/n1PW3bR.png" alt="logo" className="w-25 transition-transform duration-300 hover:scale-125 hover:translate-x" />
                        <span className="text-4xl">Maria Gasolina</span>  
                    </div>
                  

                    <div className="flex gap-4 text-xl px-4">
                       <span className="hover:text-[#0D0D0D]"> Home</span>
                       <span>|</span>
                       <span className="hover:text-[#0D0D0D]">Corridas</span>
                       <span>|</span>
                       <span className="hover:text-[#0D0D0D]"> Categorias</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar