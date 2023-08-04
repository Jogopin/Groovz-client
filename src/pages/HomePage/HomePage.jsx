import HeroBanner  from "./HeroBanner";
import defImg from "../../assets/imgs/defImg.webp"
import defImgRed from "../../assets/imgs/defImgRed.png"
import FavoriteProducts from "./FavoriteProducts";


export default function HomePage({productsList}){

  const heroProduct = productsList.filter(item=>item.isHeroProduct===true)
  const favoriteProducts = productsList.filter(item=>item.isFavorite === true)
  return (
    <>
      <HeroBanner heroProduct={heroProduct[0]}/>

      <FavoriteProducts productsList={favoriteProducts} />
    </>
  );
};


