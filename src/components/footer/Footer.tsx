import { EnvelopeIcon, GithubLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex bg-[linear-gradient(135deg,#0D0D0D_0%,#76A687_40%,#D97652_100%)] text-white">
        <div className="w-full flex text-xl justify-between items-center py-1.5 font-yusei">
          <div className="flex items-center">
            <img
              src="https://i.imgur.com/NKTrcQT.png"
              alt="logo"
              className="w-16 transition-transform duration-300 hover:scale-110 hover:translate-x"
            />
            <span>Commit8 | Copyright {data}</span>
          </div>

          <div className="flex gap-5 px-2">
            <p>Venha nos conhecer</p>

            <a
              href="https://github.com/Commit8"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogoIcon
                className="transition-transform duration-300 hover:scale-125 hover:translate-x"
                size={38}
                weight="light"
              />
            </a>

            <a
              href="mailto:devteam01.js09@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeIcon
                className="transition-transform duration-300 hover:scale-125 hover:translate-x"
                size={38}
                weight="light"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
