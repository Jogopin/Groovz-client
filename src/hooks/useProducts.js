import { useEffect, useState } from "react"
import { createProduct, getProducts } from "../services/api"

export default function useProducts(){
    const [productsList, setProductsList ] = useState([])
  
    const fetchProducts = async()=>{
      try{ 
        const productsData = await getProducts()
        setProductsList(productsData)
      }catch(error){
        console.log(`Error getting the list of products, `,error)
      }
    }

    const addProductAndUpdateState = async(newProduct)=>{
      await createProduct(newProduct)
      fetchProducts()
  
    }

  useEffect(()=>{   
    fetchProducts()    
  },[])


  return { productsList,addProductAndUpdateState }

}