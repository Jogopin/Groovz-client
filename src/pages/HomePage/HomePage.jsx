import HeroBanner  from "./HeroBanner";
import FavoriteProducts from "./FavoriteProducts";
import LoadingSpinner from "../../components/LoadingSpinner";


export default function HomePage({productsList,isLoading}){

  const heroProduct = productsList.filter(item=>item.isHeroProduct===true)
  const favoriteProducts = productsList.filter(item=>item.isFavorite === true)

  if(isLoading) return <LoadingSpinner/> 
  return (
    <>
      <HeroBanner heroProduct={heroProduct[0]}/>
      <FavoriteProducts productsList={favoriteProducts} />
    </>
  );
};


