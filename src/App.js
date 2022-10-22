import "./App.css";
import logo from "./logo-book.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header mt-3 clearfix">
          <h1>
            <img src={logo} className="img-fluid " alt="logo" />{" "}
            <span>DICTIONARY</span>
          </h1>
          <h4>Make your words meaningful</h4>
        </header>

        <button type="button" className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
}
