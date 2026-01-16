import Home from "../components/Home"
import Splitter from "../components/Splitter";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Main() {
  return (
    <div>
      <Home />
      <Splitter />
      <About />
      <Contact />
    </div>
  );
}