import clsx from "clsx";

import AboutMeInLines from "./AboutMeInLines";

import Contacts from "./Contacts";

function AboutMe() {
  const largeDevice =
    "max-lg:pb-48 max-lg:items-start max-lg:flex-row max-lg:flex-col-reverse max-lg:items-center";

  return (
    <div
      id="aboutMe"
      className={clsx("flex justify-center relative pb-[150px]", largeDevice)}
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

        <Contacts />
      </article>
    </div>
  );
}

export default AboutMe;
