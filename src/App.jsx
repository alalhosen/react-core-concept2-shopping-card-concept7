import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
         
          <h1 className="bg-gray text-2xl italic font-extrabold">Shopping Card</h1>
        </div>
        <hr />

        {/* card section */}
        <div className="main-container mt-8">
          <div className="card-container">
            <h1 className="text-2xl">This is card</h1>
          </div>
          <div className="cart-container">
            <h1 className="text-2xl">This is cart</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
