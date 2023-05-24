import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";

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

      <Footer />
    </div>
  );
}

export default App;
