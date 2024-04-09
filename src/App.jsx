import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import NewsLetter from "./components/NewsLetter";
function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Header></Header>
      <Hero></Hero>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
