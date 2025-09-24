import React from 'react';

const SingleProduct = () => {
    return (
        <div>
           <div className="card">
              <img className="img-card"
                src="https://fabrilife.com/products/6194db577ef6d-square.jpg?v=20"
                alt=""
              />
              <h1 className="text-2xl">Tittle Test</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                nesciunt commodi iure corrupti nostrum ut!
              </p>
              <div className="card-footer">
                <h1>520 $</h1>
                <button className="add-btn">Add To Cart</button>
              </div>
            </div>

        </div>
    );
};

export default SingleProduct;