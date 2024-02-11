import BorderSec from "./components/BorderSec";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Tokenomic from "./components/Tokenomic";

function App() {
  return (
    <>
      <div className=" relative">
        <Header />
        <Navbar />
        <Hero />
        <BorderSec />
        <Tokenomic />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
}

export default App;
