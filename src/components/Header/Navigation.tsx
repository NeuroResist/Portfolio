import { NAV } from "./constants";

function Navigation() {
  return (
    <nav className="max-sm:hidden">
      <ul className="flex justify-center flex-row [&>*]:px-20 text-lg text-white">
        {Object.entries(NAV).map(([key, value]) => (
          <li
            key={`nav_${key}`}
            className="border-r-2 border-r-[#530FAD] last:border-0"
          >
            <a href={`#${value}`}>{key}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
