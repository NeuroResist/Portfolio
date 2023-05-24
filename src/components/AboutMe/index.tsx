import clsx from "clsx";

import AboutMeInLines from "./AboutMeInLines";

import { CONTACTS } from "./constants";

function AboutMe() {
  const smallDevice = "max-lg:items-start max-lg:flex-row";
  const largeDevice = "max-lg:flex-col-reverse max-lg:items-center";

  return (
    <div
      className={clsx(
        "flex justify-center relative pb-[150px] max-lg:pb-48",
        smallDevice,
        largeDevice
      )}
    >
      <AboutMeInLines />

      <article className="flex flex-col p-32 max-w-[500px] max-lg:mb-40 max-sm:pb-0">
        <section className="mb-32">
          <h3 className="font-bold text-2xl">
            Привет, меня зовут Ярослав Орлов
          </h3>

          <p className="text-[#c5a77c] text-xl mb-8">Frontend developer</p>
          <p className="text-lg">
            Люблю свое дело, спокойный и искренний, быстро привыкаю к новым
            условиям.
          </p>
        </section>

        <section className="flex flex-col max-lg:self-center">
          <h4 className="text-2xl mb-4 max-lg:self-center">Контакты:</h4>

          <ul className="flex">
            {Object.entries(CONTACTS).map(([key, value]) => (
              <li key={key} className="mx-2">
                <a href={key}>{value}</a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

export default AboutMe;
