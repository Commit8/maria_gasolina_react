import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  //saber se o menu hamburguer está clicado ou não
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="w-full flex bg-[linear-gradient(135deg,#4D5159_0%,#76A687_40%,#D97652_100%)] text-white font-yusei md:px-4 lg:px-6">

        <div className="w-full flex items-center justify-between">

          <Link
            to="/home"
            className={`flex items-center space-x-2 text-3xl font-extrabold text-white tracking-wide ${
              !isNavOpen ? "block" : "hidden"
            } sm:flex`}
          >

          <div className="flex items-center">
            <img
              src="https://i.imgur.com/n1PW3bR.png"
              alt="logo"
              className="border-[] w-25 transition-transform duration-300 hover:scale-125 hover:translate-x"
            />
            <a href="/home"className=" text-3xl md:text-4xl lg:text-5xl ">
              Maria Gasolina
            </a>
          </div>
          </Link>

        <div className="sm:hidden">

          <div
            className="cursor-pointer hover:text-white absolute top-0 right-0 px-6 py-6 z-11"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            {isNavOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
          </div>

         <div className={isNavOpen ? "mostraMenuNav" : "escondeMenuNav"}>
          <div className="flex gap-4 text-xl px-4">
            <Link to="/home" className="hover:text-[#]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Home{" "}
            </Link>
            <span>|</span>
            <Link to="/corridas" className="hover:text-[#0D0D0D]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Corridas{" "}
            </Link>
            <span>|</span>
            <Link to="/categorias" className="hover:text-[#0D0D0D]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Categorias{" "}
            </Link>
            </div>
          </div>
        </div>

         <div className="hidden sm:flex gap-4 items-center lg:text-xl">
          <Link to="/home" className="hover:text-[#0D0D0D]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Home{" "}
            </Link>
            <span>|</span>
            <Link to="/corridas" className="hover:text-[#0D0D0D]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Corridas{" "}
            </Link>
            <span>|</span>
            <Link to="/categorias" className="hover:text-[#0D0D0D]" onClick={() => setIsNavOpen(false)}>
              {" "}
              Categorias{" "}
            </Link>
        </div>
      </div>

      <style>
        {`
        .escondeMenuNav{
          display: none;
        }
        .mostraMenuNav{
          background: #4d5159;
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 55vh;
        }`}
      </style>

      </div>
   
  </>
  );
}

export default Navbar;
