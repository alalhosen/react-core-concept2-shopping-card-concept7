import React from 'react';

const SingleProduct = ({product, handleCart}) => {
    // console.log(handleCart)
    return (
        <div>
           <div className="card space-y-4">
              <img className="img-card"
                src={product.image}
                alt=""
              />
              <h1 className="text-2xl font-bold italic">{product.title.slice(0,10)}</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quo facilis optio omnis harum aperiam?
              </p>
              <div className="card-footer">
                <h1>{product.price} $</h1>
                <button onClick={(e)=>handleCart(product)} className="add-btn">Add To Cart</button>
              </div>
            </div>

        </div>
    );
};

export default SingleProduct;