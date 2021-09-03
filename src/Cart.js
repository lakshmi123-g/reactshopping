import React from 'react';


export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}

      {cart.map((product, idx) => (

        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={idx}>
          <img src={product.image} alt="" class="card-img-top img-fluid" style={{ height: "6rem" }} />
          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <h4 className="card-title">${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
            <button className="btn btn-primary m-2">Buy Now</button>

          </div>
        </div>
      ))}


      <div>Total Cost: ${getTotalSum()}</div>
    </>
  );
}
