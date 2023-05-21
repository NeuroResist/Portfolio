import { ITechnology } from "./interface";

function Technology(props: ITechnology) {
  const { SVG, title, text } = props;

  return (
    <li className="flex border border-2 rounded border-[#530FAD] p-10">
      <div className="flex items-center">
        <a className="mr-10" href="src/components/Stack#">
          {SVG}
        </a>

        <section className="flex flex-col">
          <h6>{title}</h6>
          <p>{text}</p>
        </section>
      </div>
    </li>
  );
}

export default Technology;
