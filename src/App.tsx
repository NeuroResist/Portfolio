import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <AboutMe />

        <Experience />

        <Stack />

        <AdditionalInfo />
      </main>

      <Footer />
    </>
  );
}

export default App;
