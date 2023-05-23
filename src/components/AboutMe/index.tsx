import AboutMeInLines from "./AboutMeInLines";
import { CONTACTS } from "./constants";

function AboutMe() {
  return (
    <div className="flex text-white justify-center mx-auto container relative pb-[150px]">
      <AboutMeInLines />

      <article className="p-32 max-w-[500px]">
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

        <section>
          <h4 className="text-2xl">Контакты:</h4>

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
