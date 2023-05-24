import { ReactComponent as ReactLogo } from "assets/icons/reactLogo.svg";
import { ReactComponent as TypescriptLogo } from "assets/icons/typescriptLogo.svg";
import { ReactComponent as ReactHookFormLogo } from "assets/icons/reactHookFormLogo.svg";
import { ReactComponent as TailwindLogo } from "assets/icons/tailwindLogo.svg";
import { ReactComponent as GitLogo } from "assets/icons/gitLogo.svg";
import { ReactComponent as LodashLogo } from "assets/icons/lodashLogo.svg";
import { ReactComponent as DayjsLogo } from "assets/icons/dayjsLogo.svg";
import { ReactComponent as ReactRouterLogo } from "assets/icons/reactRouterLogo.svg";
import { ReactComponent as EffectorLogo } from "assets/icons/effectorLogo.svg";
import { ReactComponent as EmotionLogo } from "assets/icons/emotionLogo.svg";
import { ReactComponent as TwinMacroLogo } from "assets/icons/twinMacroLogo.svg";

import { ActualStackType } from "./types";

export const ACTUAL_STACK: ActualStackType = {
  React: {
    SVG: <ReactLogo />,
    text: "Библиотека JavaScript для создания пользовательских интерфейсов",
    link: "https://react.dev/",
  },
  Typescript: {
    SVG: <TypescriptLogo />,
    text: "Язык со статической типизацией на основе JavaScript",
    link: "https://www.typescriptlang.org/",
  },
  "React Hook Form": {
    SVG: <ReactHookFormLogo />,
    text: "Библиотека для работы с формами",
    link: "https://react-hook-form.com/",
  },
  Tailwind: {
    SVG: <TailwindLogo />,
    text: "Библиотека, позволяющая создавать пользовательские интерфейсы при помощи набора готовых классов",
    link: "https://tailwindcss.com/",
  },
  Git: {
    SVG: <GitLogo />,
    text: "GitHub/GitLab - веб-репозитории Git",
    link: "https://git-scm.com/",
  },
  Lodash: {
    SVG: <LodashLogo />,
    text: "Библиотека с набором полезных JS функций",
    link: "https://lodash.com/",
  },
  Dayjs: {
    SVG: <DayjsLogo />,
    text: "Библиотека для работы с датами",
    link: "https://day.js.org/",
  },
  "React Router": {
    SVG: <ReactRouterLogo />,
    text: "Библиотека для маршрутизации страниц React",
    link: "https://reactrouter.com/en/main",
  },
  Effector: {
    SVG: <EffectorLogo />,
    text: "Cтейт-менеджер",
    link: "https://effector.dev/ru/",
  },
  Emotion: {
    SVG: <EmotionLogo />,
    text: "CSS-in-JS библиотека, использую в связке с Twin.macro",
    link: "https://emotion.sh/docs/introduction",
  },
  "Twin.macro": {
    SVG: <TwinMacroLogo />,
    text: "Макрос для Tailwind + Emotion",
    link: "https://github.com/ben-rogerson/twin.macro",
  },
};
