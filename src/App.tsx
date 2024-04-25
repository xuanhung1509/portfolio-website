import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VerticalNavigation from "./components/VerticalNavigation";

function App() {
  return (
    <>
      <div className="font-Rubik flex flex-col justify-start gap-24 bg-portfolio-secondary">
        <Header />
        <Hero />
        <Works />
        <About />
        <Contact />
        <Footer />
        <VerticalNavigation />
      </div>
      <Toaster />
    </>
  );
}
export default App;
