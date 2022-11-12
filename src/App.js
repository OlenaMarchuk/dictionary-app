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
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/olena-marchuk-1a1558247/details/experience/"
              target="blank"
              rel="noopener noreferrer"
            >
              Olena Marchuk
            </a>{" "}
            is{" "}
            <a
              href="https://github.com/OlenaMarchuk/dictionary-app"
              target="blank"
              rel="noopener noreferrer"
            >
              open-sourced
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://lighthearted-nougat-2f8e8d.netlify.app/"
              target="blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
