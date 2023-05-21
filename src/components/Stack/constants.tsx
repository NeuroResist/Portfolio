import { ReactNode } from "react";

import { ReactComponent as ReactLogo } from "assets/icons/reactLogo.svg";
import { ReactComponent as TypescriptLogo } from "assets/icons/typescriptLogo.svg";
import { ReactComponent as ReactHookFormLogo } from "assets/icons/reactHookFormLogo.svg";
import { ReactComponent as TailwindLogo } from "assets/icons/tailwindLogo.svg";
import { ReactComponent as GitLogo } from "assets/icons/gitLogo.svg";
import { ReactComponent as LodashLogo } from "assets/icons/lodashLogo.svg";
import { ReactComponent as DayjsLogo } from "assets/icons/dayjsLogo.svg";
import { ReactComponent as ReactRouterLogo } from "assets/icons/reactRouterLogo.svg";
import { ReactComponent as EffectorLogo } from "assets/icons/effectorLogo.svg";

export const ACTUAL_STACK: Record<string, { SVG: ReactNode; text: string }> = {
  React: {
    SVG: <ReactLogo />,
    text: "Библиотека JavaScript для создания пользовательских интерфейсов",
  },
  Typescript: {
    SVG: <TypescriptLogo />,
    text: "Язык со статической типизацией на основе JavaScript",
  },
  "React Hook Form": {
    SVG: <ReactHookFormLogo />,
    text: "Библиотека для работы с формами",
  },
  Tailwind: {
    SVG: <TailwindLogo />,
    text: "Библиотека, позволяющая создавать пользовательские интерфейсы при помощи набора готовых классов",
  },
  Git: {
    SVG: <GitLogo />,
    text: "GitHub/GitLab - веб-репозитории Git",
  },
  Lodash: {
    SVG: <LodashLogo />,
    text: "Библиотека с набором полезных JS функций",
  },
  Dayjs: {
    SVG: <DayjsLogo />,
    text: "Библиотека для работы с датами",
  },
  "React Router": {
    SVG: <ReactRouterLogo />,
    text: "Библиотека для маршрутизации страниц React",
  },
  Effector: { SVG: <EffectorLogo />, text: "Cтейт-менеджер" },
};
