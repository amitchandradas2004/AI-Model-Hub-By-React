import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Models from "./Components/Models/Models";
import { Suspense, useState } from "react";
import Cart from "./Components/Cart/Cart";

function Loader() {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div>
        {" "}
        <span className="loading loading-spinner text-primary"></span>
      </div>
    </div>
  );
}
const fetchModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};
function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  // console.log(carts);

  const fetchPromise = fetchModels();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="tabs tabs-box gap-2 justify-center bg-transparent border-none outline-none">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full font-bold text-red-800 w-30"
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full font-bold text-red-800 w-30"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>
      {/* name of each tab group should be unique */}
      {activeTab === "cart" && (
        <Cart
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          carts={carts}
          setCarts={setCarts}
        ></Cart>
      )}
      <Suspense fallback={<Loader></Loader>}>
        {activeTab === "model" && (
          <Models
            fetchPromise={fetchPromise}
            carts={carts}
            setCarts={setCarts}
          ></Models>
        )}
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
