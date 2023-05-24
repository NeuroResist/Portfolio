function Footer() {
  return (
    <footer className="text-white">
      <hr className="border border-[#530FAD] mb-20" />

      <div className="flex flex-col items-center mb-20">
        <p className="text-center">
          Авторский сайт-портфолио, создан с нуля и имеет адаптивную верстку.
        </p>
        <p>
          Исходники сайта -{" "}
          <a
            target="_blank"
            href="https://github.com/NeuroResist/portfolio"
            className="text-[#6186ca]"
          >
            NeuroResist
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
