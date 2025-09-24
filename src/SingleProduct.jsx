import React from 'react';

const SingleProduct = ({product}) => {
    console.log(product)
    return (
        <div>
           <div className="card">
              <img className="img-card"
                src={product.image}
                alt=""
              />
              <h1 className="text-2xl">{product.title.slice(0,10)}</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quo facilis optio omnis harum aperiam?
              </p>
              <div className="card-footer">
                <h1>{product.price} $</h1>
                <button className="add-btn">Add To Cart</button>
              </div>
            </div>

        </div>
    );
};

export default SingleProduct;