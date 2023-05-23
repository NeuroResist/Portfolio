import { ReactComponent as EducationInfo } from "assets/icons/educationInfo.svg";
import { ReactComponent as Language } from "assets/icons/language.svg";
import { ReactComponent as Mentoring } from "assets/icons/mentoring.svg";

function AdditionalInfo() {
  const INFO = {
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

  return (
    <article className="flex flex-col mb-100">
      <h2 className="self-center text-3xl mb-48 justify-center underline underline-offset-4 decoration-sky-500">
        Дополнительная информация
      </h2>

      <div className="flex justify-center max-md:flex-col max-md:items-center">
        {Object.entries(INFO).map(([key, value]) => (
          <section className="border-r-2 max-md:border-r-0 max-md:border-b-2 max-md:border-b-white max-w-[300px] border-r-white last:border-none max-md:py-20 px-20 flex flex-col justify-center items-center">
            <div className="mb-10">{value.img}</div>
            <h3 className="text-2xl mb-10">{key}</h3>
            {value.text.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}

export default AdditionalInfo;
