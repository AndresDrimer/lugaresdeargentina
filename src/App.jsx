import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from './data.js'

function App() {
  const cards = data.map( item => {
    return (
      <Card 
          key = {item.id}
          item= {item}
          />)
  })

  return (
    <div className="App">
      <Header />
      {cards}
      <hr />
    </div>
  );
}

export default App;
