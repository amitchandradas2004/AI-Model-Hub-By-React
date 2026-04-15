import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Models from "./Components/Models/Models";
import { Suspense } from "react";
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
  const fetchPromise = fetchModels();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {/* name of each tab group should be unique */}
      <Cart></Cart>
      <Suspense fallback={<Loader></Loader>}>
        <Models fetchPromise={fetchPromise}></Models>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
