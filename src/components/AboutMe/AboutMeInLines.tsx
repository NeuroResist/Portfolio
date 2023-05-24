import { LINES } from "./constants";

function AboutMeInLines() {
  return (
    <div className="w-[500px] h-[400px] mr-40 rounded-xl bg-[#530FAD] -skew-y-6 px-40 py-60 max-sm:hidden">
      <div className="skew-y-6 h-full rounded-md bg-[#180E38] p-16">
        <div className="flex mb-20">
          <p className="rounded-full w-16 h-16 bg-red-500" />
          <p className="rounded-full w-16 h-16 bg-yellow-500 mx-10"></p>
          <p className="rounded-full w-16 h-16 bg-green-500"></p>
        </div>

        <div>
          <span className="italic text-[#a67eca]">const </span>
          <span className="text-[#6186ca]">ME</span>
          <span className="italic text-[#a67eca]"> = </span> {"{"}
          <ul>
            {Object.entries(LINES).map(([key, val]) => (
              <li className="pl-20 text-violet-400" key={`line_${key}`}>
                <span className="text-white">{key}</span>:
                <span className="text-[#c5a77c]"> {val}</span>
              </li>
            ))}
            {"}"}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMeInLines;
