import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
