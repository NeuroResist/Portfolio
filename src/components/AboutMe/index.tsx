import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

import HHLogo from "assets/icons/HHLogo";
import GmailLogo from "assets/icons/GmailLogo";

import { LINES } from "./constants";

function AboutMe() {
  return (
    <div className="flex text-white justify-center mx-auto container relative pb-[100px]">
      <div>
        <div className="w-[500px] h-[400px] rounded-xl bg-[#530FAD] -skew-y-6 px-40 py-60">
          <div className="skew-y-6 h-full rounded-md bg-[#180E38] p-16">
            <div className="flex mb-20">
              <p className="rounded-full w-16 h-16 bg-red-500" />
              <p className="rounded-full w-16 h-16 bg-yellow-500 mx-10"></p>
              <p className="rounded-full w-16 h-16 bg-green-500"></p>
            </div>
            <ul className="">
              <span className="italic text-[#a67eca]">const </span>
              <span className="text-[#6186ca]">ME</span>
              <span className="italic text-[#a67eca]"> = </span> {"{"}
              {Object.entries(LINES).map(([key, val]) => (
                <li className="pl-20 text-violet-400" key={key}>
                  <span className="text-white">{key}</span>:
                  <span className="text-[#c5a77c]"> {val}</span>
                </li>
              ))}
              {"}"}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-32 max-w-[500px]">
        <h3 className="font-bold text-lg">Привет, меня зовут Ярослав Орлов</h3>
        <p className="text-[#c5a77c]">Frontend developer</p>
        <p className="mb-32">
          Люблю свое дело, спокойный и искренний, быстро привыкаю к новым
          условиям.
        </p>

        <section>
          <h6 className="text-2xl">Контакты:</h6>
          <div className="flex">
            <a href="#">
              <TelegramIcon fontSize="large" className="text-[#0088cc]" />
            </a>
            <a href="#">
              <HHLogo />
            </a>
            <a href="#">
              <GmailLogo />
            </a>
            <a href="#">
              <GitHubIcon sx={{ fontSize: "32px" }} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
