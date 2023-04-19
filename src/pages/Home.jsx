import { Product, FooterBanner, HeroBanner, Footer } from "../components";
import defImg from "../assets/imgs/defImg.webp";
import defImgRed from "../assets/imgs/defImgRed.png"
import { addCartIcon } from "../assets/icons";
import PopularProducts from "../components/PopularProducts";


const Home = () => {
  const demoProducts = [
    {
      _id: 1,
      name: "Lorem Ipsum HQ",
      price: "99",
      images:[defImg,defImgRed],
    },
    {
      _id: 2,
      name: "Lorem Ipsum HQ",
      price: "199",
      images:[defImg,defImgRed],
    },
    {
      _id: 3,
      name: "Lorem Ipsum HQ",
      price: "250",
      images:[defImg,defImgRed],
      
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
