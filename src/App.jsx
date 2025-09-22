import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1 className="bg-gray-200">Shopping Card</h1>
        </div>
        <div className="main-container">
          <div className="cards-container">
            <h1>This is card</h1>
          </div>
          <div className="cart-container">
            <h1>This is cart</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
