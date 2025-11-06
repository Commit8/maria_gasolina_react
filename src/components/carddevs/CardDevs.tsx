/* eslint-disable prefer-const */
import { GithubLogoIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

interface CardPDevsProps {
  foto: string;
  nome: string;

  link: string;
}

function CardDevs(cardDev: CardPDevsProps) {
  let component: ReactNode;

  component = (
    <div className="bg-[#6EA87C] flex md:flex-col rounded-3xl justify-center items-center mx-7 text-white my-6 p-6 text-center gap-5">
      <div>
        <img
          src={cardDev.foto}
          className="rounded-full w-24 h-24 self-start flex justify-center items-start"
          alt=""
        />
      </div>
      <div>
        {" "}
        <h2 className="text-2xl font-inter font-bold ">{cardDev.nome}</h2>
        <h3 className="text-xl font-inter font-bold">Dev.</h3>
        <a href={cardDev.link} target="_blank" className="inline-block mx-auto mt-6">
          <GithubLogoIcon
            size={35}
            weight="bold"
            className="mx-auto mt-6 hover:text-[#D97652]"
          />
        </a>
      </div>
    </div>
  );

  return <>{component}</>;
}

export default CardDevs;
