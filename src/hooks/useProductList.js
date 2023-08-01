import { useEffect, useState } from "react"
import { createProduct, getProducts } from "../services/api"
import { toast } from "react-hot-toast"

export default function useProductList(){
    const [productsList, setProductsList ] = useState([])
    const [ isLoading,setIsLoading ] = useState(false)
    const [ errorMessage,setErrorMessage ]= useState(null)

    const fetchProducts = async()=>{
      try{
        setIsLoading(true)
        const productsData = await getProducts()
        setProductsList(productsData)
      }catch(error){
        const message = error.response?.data?.message || "An error occurred, please try again."
        setErrorMessage(message)
        throw error 

      }finally{
        setIsLoading(false)
      }
    }

    const addProductAndUpdateState = async(newProduct)=>{
      try{
        setIsLoading(true)
        await createProduct(newProduct)
        await fetchProducts()
        toast.success("Product added correctly")
        
      }catch(error){
        const message = error.response?.data?.message || "An error occurred while adding the product, please try again."
        setErrorMessage(error)
        toast.error(message)
        throw error 
        
      }finally{
        setIsLoading(false)
      }
      
  
    }

  useEffect(()=>{   
    fetchProducts()    
  },[])


  return { productsList,addProductAndUpdateState,isLoading,errorMessage }

}