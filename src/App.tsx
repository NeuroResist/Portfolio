import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { Divider } from "@mui/material";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import AdditionalInfo from "./components/AdditionalInfo";

function App() {
  return (
    <div className="text-white bg-black font-['Roboto'] mx-auto container px-20">
      <Header />

      <main>
        <AboutMe />

        <Stack />

        <Experience />

        <AdditionalInfo />
      </main>

      <footer className="text-white">
        <hr className="border border-[#530FAD] mb-20" />

        <div id="aaaa" className="flex flex-col items-center mb-20">
          <p className="text-center">
            Авторский сайт-портфолио, создан с нуля и имеет адаптивную верстку.
          </p>
          <p>Исходники сайта - NeuroResist</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
