import React from "react";
// import Categories from "../../components/Categories/Categories";
// import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="max-w-[90%] m-auto">
          <Slider />
          {/* <FeatureProducts type="featured products" />
          <FeatureProducts type="categories" /> */}
          {/* <Categories /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
