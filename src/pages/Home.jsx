import { Product, FooterBanner, HeroBanner, Footer } from "../components";
import defImg from "../assets/imgs/defImg.webp";
import { addCartIcon } from "../assets/icons";
import PopularProducts from "../components/PopularProducts";


const Home = () => {
  const demoProducts = [
    {
      _id: 1,
      name: "Lorem Ipsum HQ",
      defImg,
      price: "99€",
    },
    {
      _id: 2,
      name: "Lorem Ipsum HQ",
      defImg,
      price: "199€",
    },
    {
      _id: 3,
      name: "Lorem Ipsum HQ",
      defImg,
      price: "9€",
    },
  ];
  return (
    <>
      <HeroBanner />
      
      <PopularProducts productsList={demoProducts} />

      <FooterBanner />
    </>
  );
};

export default Home;
