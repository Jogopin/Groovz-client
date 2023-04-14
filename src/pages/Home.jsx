import { Product, FooterBanner, HeroBanner, Footer } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />

      {/* PRODUCTS HEADER  */}
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      {/* PRODUCTS */}
      <div>{["product 1", "product 2"].map((product) => product)}</div>
      
      <FooterBanner/>
     
    </>
  );
};

export default Home;
