
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CenterSearch from './components/Center';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App p-4">
      <div className="col-12">
        <Header/>
      </div>
      <hr />
      <div className="col-12 ">
        <CenterSearch/>
      </div>
      <br />
      <div className="col-12 ">
        <Categories/>
      </div>
    </div>
  );
}

export default App;
