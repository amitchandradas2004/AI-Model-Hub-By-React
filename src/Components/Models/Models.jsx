import React, { use } from "react";
import Model from "./Model";

const Models = ({ fetchPromise }) => {
  const models = use(fetchPromise);
  return (
    <div className="pb-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
        {models.map((model) => (
          <Model key={model.id} model={model}></Model>
        ))}
      </div>
    </div>
  );
};

export default Models;
