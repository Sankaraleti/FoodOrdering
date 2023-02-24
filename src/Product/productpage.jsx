import React, { useState } from "react";
import data from "./products";
import "./style.css";
const Productpage = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleClick = item => {
    let itemPresent = cartItems.find(citem => citem.id === item.id);
    if (itemPresent) {
      console.log(itemPresent);
      itemPresent = { ...itemPresent, count: itemPresent.count + 1 };
      if (itemPresent.count < 1) {
        setCartItems(prev => [...prev, itemPresent]);
      }
    } else {
      setCartItems(prev => [...prev, { ...item, count: 1 }]);
      // console.log(cartItems);
    }
  };

  const RemoveItem = item => {
    const newCart = cartItems.filter(citem => citem.id !== item.id);
    setCartItems(newCart);
  };
  return (
    <>
      <h2>Food ordering Page</h2>
      <div className="container">
        <div className="product-page">
          <h1>Food Items</h1>
          {data.map(item => {
            return (
              <>
                <div className="item" key={Math.random()}>
                  <div className="image">
                    <img src={item.image} alt="item" />
                  </div>
                  <h3>{item.productName}</h3>
                  <button onClick={() => handleClick(item)}>Add to cart</button>
                </div>
              </>
            );
          })}
        </div>
        <div className="Cart-page">
          <h1>cart page</h1>
          {cartItems.length === 0 ? <label>Add Items to cart</label> : ""}
          {cartItems.length > 0 &&
            cartItems.map(item => {
              return (
                <>
                  <div className="item" key={Math.random()}>
                    <div className="image">
                      <img src={item.image} alt="item" />
                    </div>
                    <h3>{item.productName}</h3>
                    {/* <p>count :1</p> */}
                    <button onClick={() => RemoveItem(item)}>Remove</button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Productpage;
