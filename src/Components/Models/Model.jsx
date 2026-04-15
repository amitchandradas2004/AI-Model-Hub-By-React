import React, { useState } from "react";

const Model = ({ model }) => {
  // console.log(model);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { title, description, price, image } = model;
  return (
    <div className="rounded-4xl border border-zinc-200 p-5 shadow-lg space-y-4 transition hover:-translate-y-0.5 overflow-hidden">
      <div className="flex justify-center bg-zinc-100 rounded-4xl  py-5">
        <img
          src={image}
          alt={title}
          className="w-60 h-60 object-contain
      "
        />
      </div>
      <h4 className="text-5xl font-extrabold text-purple-900">{title}</h4>
      <p className="text-blue-950 font-medium italic">{description}</p>
      <h4 className="font-bold text-3xl items-center text-green-900">
        ${price} <span className="text-xl ">/month</span>
      </h4>
      <button
        onClick={() => setIsSubscribed(true)}
        className="btn bg-red-700 text-white w-full rounded-full font-bold text-xl"
      >
        {isSubscribed ? "Subscribed" : "Subscribe Now"}
      </button>
    </div>
  );
};

export default Model;
