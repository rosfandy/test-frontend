import Form from "./components/Form";
import Navbar from "./components/Navbar";
import OurValue from "./components/OurValue";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <OurValue />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
