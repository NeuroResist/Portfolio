import { ITechnology } from "./interface";

function Technology(props: ITechnology) {
  const { SVG, title, text, link } = props;

  return (
    <li className="flex border border-2 rounded border-[#530FAD] p-10">
      <div className="flex items-center">
        <a target="_blank" className="mr-10" href={link}>
          {SVG}
        </a>

        <section className="flex flex-col">
          <h6 className="text-[#c5a77c] text-xl">{title}</h6>
          <p>{text}</p>
        </section>
      </div>
    </li>
  );
}

export default Technology;
