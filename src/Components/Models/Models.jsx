import React, { use } from "react";
import Model from "./Model";

const Models = ({ fetchPromise, carts, setCarts }) => {
  const models = use(fetchPromise);
  return (
    <div className="pb-10 container mx-auto">
      <div className="text-center space-y-3 py-5">
        <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
        <p className="font-medium">
          One Subscription gives you access to all frontier AI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {models.map((model) => (
          <Model key={model.id} model={model} carts={carts} setCarts={setCarts}></Model>
        ))}
      </div>
    </div>
  );
};

export default Models;
