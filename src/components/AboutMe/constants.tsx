import AdsClickIcon from "@mui/icons-material/AdsClick";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import HHLogo from "assets/icons/HHLogo";
import GmailLogo from "assets/icons/GmailLogo";

export const LINES = {
  fullName: "Орлов Ярослав",
  age: "22 года",
  code: `["Javascript", "Typescript"]`,
  portfolio: (
    <a href="https://voronezh.hh.ru/applicant/resumes/view?resume=96d5392eff0bf80b750039ed1f506b54336565">
      hh.ru <AdsClickIcon fontSize="small" />
    </a>
  ),
  telegram: (
    <a href="https://t.me/only1nely">
      @only1nely <AdsClickIcon fontSize="small" />
    </a>
  ),
  github: (
    <a href="https://github.com/NeuroResist">
      NeuroResist <AdsClickIcon fontSize="small" />
    </a>
  ),
  email: (
    <a href="mailto:yaroslav.orlov.work@gmail.com">
      yaroslav.orlov.work@gmail.com <AdsClickIcon fontSize="small" />
    </a>
  ),
};

export const CONTACTS = {
  "https://t.me/only1nely": (
    <TelegramIcon fontSize="large" className="text-[#0088cc]" />
  ),
  "https://voronezh.hh.ru/applicant/resumes/view?resume=96d5392eff0bf80b750039ed1f506b54336565":
    <HHLogo />,
  "mailto:yaroslav.orlov.work@gmail.com": <GmailLogo />,
  "https://github.com/NeuroResist": <GitHubIcon sx={{ fontSize: "32px" }} />,
};
