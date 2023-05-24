import { ReactNode } from "react";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

import { ReactComponent as HHLogo } from "assets/icons/HHLogo.svg";
import { ReactComponent as GmailLogo } from "assets/icons/gmailLogo.svg";

import { ILines } from "./interface";

export const LINES: ILines = {
  fullName: "Орлов Ярослав",
  age: "22 года",
  code: `["Javascript", "Typescript"]`,
  portfolio: (
    <a
      target="_blank"
      href="https://voronezh.hh.ru/applicant/resumes/view?resume=96d5392eff0bf80b750039ed1f506b54336565"
    >
      hh.ru <AdsClickIcon fontSize="small" />
    </a>
  ),
  telegram: (
    <a target="_blank" href="https://t.me/only1nely">
      @only1nely <AdsClickIcon fontSize="small" />
    </a>
  ),
  github: (
    <a target="_blank" href="https://github.com/NeuroResist">
      NeuroResist <AdsClickIcon fontSize="small" />
    </a>
  ),
  email: (
    <a href="mailto:yaroslav.orlov.work@gmail.com">
      yaroslav.orlov.work@gmail.com <AdsClickIcon fontSize="small" />
    </a>
  ),
};

export const CONTACTS: Record<string, ReactNode> = {
  "https://t.me/only1nely": (
    <TelegramIcon className="text-[#0088cc] !text-6xl" />
  ),
  "https://voronezh.hh.ru/applicant/resumes/view?resume=96d5392eff0bf80b750039ed1f506b54336565":
    <HHLogo className="mt-6" />,
  "mailto:yaroslav.orlov.work@gmail.com": <GmailLogo />,
  "https://github.com/NeuroResist": (
    <GitHubIcon className="mt-6 !text-[48px]" />
  ),
};
