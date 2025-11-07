/* eslint-disable prefer-const */
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

interface CardPDevsProps {
  foto: string;
  nome: string;
  descricao: string;
  Githublink: string;
  Linkedinlink: string;
}

function CardDevs(cardDev: CardPDevsProps) {
  let component: ReactNode;

  component = (
    <div className="bg-[#d88162] flex md:flex-col rounded-3xl justify-center items-center mx-7 text-white my-6 p-6 text-center gap-5">
      <div>
        <img
          src={cardDev.foto}
          className="rounded-full w-40 h-40 self-start flex justify-center items-start"
          alt=""
        />
      </div>
      <div>
        {" "}
        <h2 className="text-2xl font-inter font-bold ">{cardDev.nome}</h2>
        <p className="w-full">{cardDev.descricao}</p>
        <div>
          <a
            href={cardDev.Githublink}
            target="_blank"
            className="inline-block mx-auto mt-6"
          >
            <GithubLogoIcon
              size={35}
              weight="bold"
              className="mx-auto mt-6 hover:text-[#468A57]"
            />
          </a>
          <a
            href={cardDev.Linkedinlink}
            target="_blank"
            className="inline-block mx-auto mt-6"
          >
            <LinkedinLogoIcon
              size={35}
              weight="bold"
              className="mx-auto mt-6 hover:text-[#468A57]"
            />
          </a>
        </div>
      </div>
    </div>
  );

  return <>{component}</>;
}

export default CardDevs;
