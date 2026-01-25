import Home from "../components/Home"
import Splitter from "../components/Splitter";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Journey from "../components/Journey";

export default function Main() {
  return (
    <div>
      <Home />
      <Splitter />
      <About />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
}