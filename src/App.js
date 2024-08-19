import "./App.css";
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatsGPT3,
  Header,
} from "./containers/index";
import { CTA, Brand, Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatsGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
