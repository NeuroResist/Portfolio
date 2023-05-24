import { ReactNode } from "react";

import { ReactComponent as EducationInfo } from "assets/icons/educationInfo.svg";
import { ReactComponent as Language } from "assets/icons/language.svg";
import { ReactComponent as Mentoring } from "assets/icons/mentoring.svg";

export const INFO: Record<string, { img: ReactNode; text: string[] }> = {
  Образование: {
    img: <EducationInfo />,
    text: ["ВГУ Воронеж ПММ", "Механика и Математическое Моделирование."],
  },
  Менторинг: {
    img: <Mentoring />,
    text: ["Есть опыт менторинга человека и курирования разработки."],
  },
  "Иностранный язык": {
    img: <Language />,
    text: ["Русский — родной", "Английский — B1"],
  },
};
