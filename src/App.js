import "./App.css";
import logo from "./logo-book.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header pt-5 pb-3 clearfix">
          <h1>
            <img src={logo} className="img-fluid " alt="logo" />{" "}
            <span>DICTIONARY</span>
          </h1>
        </header>
        <main>
          <Dictionary defaultedKeyword="hello" />
        </main>
        <footer className="text-center">
          <small>
            Coded by Olena Marchuk and is{" "}
            <a
              href="https://github.com/OlenaMarchuk/dictionary-app"
              target="blank"
              rel="noopener noreferrer"
            >
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
