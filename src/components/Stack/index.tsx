import Technology from "./Technology";
import { ACTUAL_STACK } from "./constants";

function Stack() {
  return (
    <ul className="grid grid-cols-3 gap-x-20 gap-y-20 text-white mb-100">
      {Object.entries(ACTUAL_STACK).map(([key, { SVG, text }]) => (
        <Technology SVG={SVG} title={key} text={text} />
      ))}
    </ul>
  );
}

export default Stack;
