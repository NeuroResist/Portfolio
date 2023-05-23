import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { Divider } from "@mui/material";
import Stack from "./components/Stack";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-black font-['Roboto']">
      <Header />

      <main className="mx-auto container">
        <AboutMe />

        <Stack />

        <Experience />
      </main>

      <footer className="text-white">
        <hr className="border border-[#530FAD] mb-20" />

        <div id="aaaa" className="flex flex-col items-center mb-20">
          <p>Авторский сайт-портфолио, создан с нуля.</p>
          <p>Исходники сайта - NeuroResist</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
