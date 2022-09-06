import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CenterSearch from "./components/Center";
import Categories from "./components/categories/Categories";
import Features from "./components/features/Features";
import ExtraData from "./components/ExtraData";

function App() {
  return (
    <div className="App p-4">
      <div className="col-12 fixed-top">
        <Header />
      </div>
      <hr />
      <div className="col-12 mt-5">
        <CenterSearch />
      </div>
      <br />
      <div className="col-12 ">
        <Categories />
      </div>
      <br />
      <div className="col-12">
        <Features />
      </div>
      <br />
      <div className="col-12 mb-5">
        <ExtraData />
      </div>

      <div className="footer  bg-light ">
        <footer className="text-center text-lg-start">
          <div className="text-center p-3">
            <span> React Commmerce Template</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
