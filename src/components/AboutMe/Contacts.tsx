import { CONTACTS } from "./constants";

function Contacts() {
  return (
    <section className="flex flex-col max-lg:self-center">
      <h3 className="text-2xl mb-4 max-lg:self-center">Контакты:</h3>

      <ul className="flex">
        {Object.entries(CONTACTS).map(([key, value]) => (
          <li key={`contact_${key}`} className="mx-2">
            <a target="_blank" href={key}>
              {value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
