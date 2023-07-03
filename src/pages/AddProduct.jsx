import { useRef, useState } from "react";
import axios from "axios";
import InputLabelText from "../components/InputLabelText";
import service from "../api/service";
import { plusIcon } from "../assets/icons";


export default function AddProduct() {

  const name = useRef(null);
  const reference = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const discount = useRef(null);
  const stock = useRef(null);
  const category = useRef(null);
  const [imageUrlList, setImageUrlsList] = useState([]);

  const resetForm=()=>{
    name.current.value = null
    reference.current.value = null
    description.current.value = null
    price.current.value = null
    discount.current.value  = null
    stock.current.value = null
    category.current.value = null
    setImageUrlsList([])
  }
 
  const handleFileUpload = (e)=>{
    //console.log("The file to be uploaded is: ,"e.target.files[0])
    const file = e.target.files[0]    
    const uploadData = new FormData()

    uploadData.append("imageUrl",file)

    service.uploadImage(uploadData)
    .then(response =>{
      console.log("response is, ",response)
      setImageUrlsList((prevState) => [...prevState,{url:response.fileUrl, name:file.name}])
            
    })
    .catch(error=>{
      console.log("Error while uploading the file: ",error)
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct={
         name : name.current.value,
         reference : reference.current.value,
         description : description.current.value,
         price : price.current.value,
         discount : discount.current.value ? discount.current.value : 0,
         stock : stock.current.value,
         category : category.current.value,
         
         images : imageUrlList.map(item => item.url) 
    }

    

    axios.post(`${import.meta.env.VITE_API_URL}/products`,newProduct)
    .then(response=>{

        console.log("new product created",response.data)
        resetForm()
    })
    .catch(error=>{
        console.log("error creating a product, ",error.response.data.message)      
                
      })
  };

  const handleCancel = (e) => {
    e.preventDefault()
    resetForm()
  };


 
  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 flex flex-col items-start gap-4 "
      >
        <InputLabelText
          id="name"
          label="Name"
          name="name"
          inputRef={name}
          placeholder={"Product's name"}
        />
        <InputLabelText
          id="reference"
          label="Reference"
          name="reference"
          inputRef={reference}
          placeholder={"Unique Reference"}
        />
        <div className="flex items-center">
          <label className=" w-32 font-semibold " htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            ref={description}
            placeholder="Description"
            rows="4"
            cols="60"
            className="h-60 w-52 rounded-md border-2 border-zinc-800 p-2 md:h-auto md:w-auto"
            required
          />
        </div>
        <div className="flex items-center">
          <label className=" w-32 font-semibold " htmlFor="category">
            Category
          </label>
          <select
            id="category"
            ref={category}
            className="w-auto rounded-md border-2 border-zinc-800 p-2 "
          >
            <option value="headphones">Headphones</option>
            <option value="speakers">Speakers</option>
          </select>
        </div>

        <div className="flex items-center">
          <label className=" w-32 font-semibold " htmlFor="price">
            Price
          </label>
          <input
            id="price"
            ref={price}
            placeholder="Price "
            className="w-24 rounded-md border-2 border-zinc-800 p-2"
            type="number"
            required
          />
          <span className="px-2 font-semibold">€</span>
        </div>
        <div className="flex items-center">
          <label className=" w-32 font-semibold " htmlFor="stock">
            Stock
          </label>
          <input
            id="stock"
            ref={stock}
            placeholder="Units in stock"
            className="w-36   rounded-md border-2 border-zinc-800 p-2"
            type="number"
            required
          />
          <span className="px-2 font-semibold">units</span>
        </div>
        <div className="flex items-center">
          <label className=" w-32 font-semibold " htmlFor="discount">
            Discount
          </label>
          <input
            id="discount"
            ref={discount}
            placeholder="Discount (%)"
            className="w-36   rounded-md border-2 border-zinc-800 p-2"
            type="number"
          />
          <span className="px-2 font-semibold">%</span>
        </div>

        <div className="flex w-full p-2 flex-wrap justify-center gap-2 rounded-xl border-black border-2 bg-zinc-100 shadow-inner">
          <div >
            <label className="flex h-32 w-32 items-center justify-center rounded-2xl  bg-zinc-300 duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
              <input type="file" onChange={handleFileUpload} hidden />
              <img className="h-max" src={plusIcon} />
            </label>
            <p className="w-full truncate text-center font-semibold">Add Image</p>
          </div>

          {imageUrlList.map((item, i) => (
            <div className="w-32" key={i}>
              <img className="w-full" src={item.url} alt="uploaded" />
              <p className="w-full truncate text-center font-semibold ">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="m-auto flex gap-4">
          <button className="btn-primary m-auto px-4 py-2">Add Product</button>
          <button
            onClick={handleCancel}
            className="btn-primary m-auto px-4 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
