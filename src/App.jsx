import "./App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="bg-gray text-2xl italic font-extrabold">
            Shopping Card
          </h1>
        </div>
        <hr />

        {/* card section */}
        <div className="main-container mt-8">
          <div className="cards-container">

            {/******** card container ********/}
            <div className="card">
              <img
                src="https://fabrilife.com/products/6194db577ef6d-square.jpg?v=20"
                alt=""
              />
              <h1>Tittle Test</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nesciunt commodi iure corrupti nostrum ut!
              </p>
              <div className="card-footer">
                <h1>520 $</h1>
                <button className="add-btn">Add To Cart</button>
              </div>
            </div>

            {/******** cart container ********/}
            <div className="card"></div>
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
