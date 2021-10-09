import "./App.css";
import { List } from "./components/List";
import { Header } from "./components/Header";

function App() {
  const musics = [
    { musica: "chayane" },
    { musica: "the beattles" },
    { musica: "marama" },
  ];

  return (
    <div className="App">
      <Header />
      <List albums={musics} />
    </div>
  );
}

export default App;
