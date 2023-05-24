import clsx from "clsx";

import AboutMeInLines from "./AboutMeInLines";
import Contacts from "./Contacts";

import me from "assets/icons/me.jpg";

function AboutMe() {
  const largeDevice =
    "max-lg:pb-48 max-lg:items-start max-lg:flex-row max-lg:flex-col-reverse max-lg:items-center";

  return (
    <div
      id="aboutMe"
      className={clsx("flex justify-center relative pb-[150px]", largeDevice)}
    >
      <AboutMeInLines />

      <div className="flex flex-col p-32 max-w-[500px] max-lg:mb-40 max-sm:pb-0 max-sm:items-center">
        <img
          src={me}
          alt="мое фото"
          className="w-[250px] h-[250px] mb-40 hidden max-sm:flex"
        />

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
      </div>
    </div>
  );
}

export default AboutMe;
