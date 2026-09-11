import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies";

const TechnologyDataFetch = async () => {
  const res = await fetch("../public/data.json");
  const data = await res.json();
  return data;
  // console.log(data);
};

function App() {
  const [TechnologyDataPromise] = useState(() => TechnologyDataFetch());
  // const TechnologyDataPromise = TechnologyDataFetch();
  console.log(TechnologyDataPromise);

  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Suspense
        fallback={
          <div className="flex justify-center text-xl mb-4">
            <h2>Data is Loading...</h2>
            <span className="loading loading-spinner text-success"></span>
          </div>
        }
      >
        <Technologies
          TechnologyDataPromise={TechnologyDataPromise}
        ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
