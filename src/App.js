import "./App.css";

function getStockpile() {
  console.log("test api button");
  let apiUrl = "http://127.0.0.1:8000/api/stockpiles";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stockpile</h1>
      </header>
      <main>
        <button onClick={() => getStockpile()}>test api</button>
      </main>
    </div>
  );
}

export default App;
