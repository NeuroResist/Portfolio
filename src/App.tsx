import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import { Divider } from "@mui/material";
import Stack from "./components/Stack";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <main className="mx-auto container">
        <AboutMe />
        <Divider sx={{ text: "red" }} textAlign="center">
          <h3 className="text-[#530FAD]">Навыки</h3>
        </Divider>

        <Stack />

        <Experience />
      </main>
    </div>
  );
}

export default App;
