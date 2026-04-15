import React from "react";
import { RxCross1 } from "react-icons/rx";

const Cart = ({ carts, setCarts }) => {
  // console.log(carts);

  return (
    <div className="pt-10 container mx-auto">
      <h3 className="text-4xl font-bold text-center">Your Cart</h3>
      {carts.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center shadow-md   py-5 px-2 rounded-2xl bg-gray-200 my-5"
        >
          <div className="flex justify-between items-center gap-3">
            <img src={item.image} alt={item.title} className="w-20" />
            <div>
              <h3 className="text-3xl font-bold pb-2">{item.title}</h3>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold">${item.price}</h4>
            <p>per month</p>
          </div>
          <span className="pr-5 text-2xl">
            <RxCross1 />
          </span>
        </div>
      ))}
      <div className="flex justify-between items-center bg-black text-white text-2xl font-bold rounded-full px-10 py-5 my-5">
        <span>Total</span>
        <span>{carts.length}</span>
      </div>
    </div>
  );
};

export default Cart;
