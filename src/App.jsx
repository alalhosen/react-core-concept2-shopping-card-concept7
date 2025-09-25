import { useEffect, useState } from "react";
import "./App.css";
import SingleProduct from "./SingleProduct";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../public/fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleCart = (p) => {
    console.log(p );
  };
  console.log(products);

  return (
    <>
      <div>
        <div>
          <h1 className="bg-gray text-2xl italic font-extrabold">
            Shopping Card
          </h1>
        </div>
        <hr />

        {/* cards container */}
        <div className="main-container mt-8">
          <div className="cards-container">
            {products.map((pd) => (
              <SingleProduct product={pd} handleCart={handleCart}></SingleProduct>
            ))}

            {/******** cart container ********/}
          </div>
          <div className="cart-container">
            <h1 className="text-center font-extrabold text-2xl">This is cart</h1>
            <div className="cart-title font-bold mt-4">
              <h5>Name</h5>
              <h5>Price</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
