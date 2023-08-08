import { useState } from "react";
import InputLabel from "../components/InputLabel";
import { plusIcon } from "../assets/icons";
import { uploadImage } from "../services/api";
import { toast } from "react-hot-toast";
import ButtonText from "../components/ButtonText";

export default function AddProduct({ addProductAndUpdateState }) {
  const [formState, setFormState] = useState({
    name: "",
    reference: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    category: "headphones",
  });
  const [imageUrlList, setImageUrlsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)

  const handleOnChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormState({
      name: "",
      reference: "",
      description: "",
      price: "",
      discount: "",
      stock: "",
      category: "",
    });
    setImageUrlsList([]);
  };

  const handleFileUpload = async (e) => {
    // console.log("The file to be uploaded is: ,"e.target.files[0])
    if(e.target.files.length===0){
      console.log("No file selected")
      return
    }    
    const file = e.target.files[0];
    const uploadData = new FormData();

    uploadData.append("imageUrl", file);
    try {
      const response = await uploadImage(uploadData);
      setImageUrlsList((prevState) => [
        ...prevState,
        { url: response.fileUrl, name: file.name },
      ]);
      //reset the value of the file input field 
      e.target.value = null
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...formState,
      images: imageUrlList.map((item) => item.url),
    };
    

    try {
      await addProductAndUpdateState(newProduct);      
      toast.success(`${formState.name} created correctly`)
      resetForm()
      setErrorMessage(null)
    } catch (error) {      
      setErrorMessage(error.response.data.message)
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <div className="m-4">
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-10 flex flex-col items-center gap-4 md:w-3/5 lg:w-2/5 "
      >
        {errorMessage ? <p className="text-sm text-red-500">{errorMessage}</p> : <></>}

        <InputLabel
          input={{
            name: "name",
            value: formState.name,
            onChange: handleOnChange,
            placeholder: "Product's name",
          }}
          id="name"
          label="Name"
        />
        <InputLabel
          input={{
            name: "reference",
            value: formState.reference,
            onChange: handleOnChange,
            placeholder: "Unique Reference",
          }}
          id="reference"
          label="Reference"
        />
        <div className="m-2 w-full">
          <label
            className="block text-xs font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleOnChange}
            placeholder="Description"
            rows="4"
            cols="50"
            className="mt-1 h-60 w-full rounded-md border-2 border-zinc-300 px-2 sm:h-full"
            required
          />
        </div>
        <div className="flex flex-row">
          {/* Price & Discount */}
          <div className="mx-auto flex flex-col gap-2">
            <InputLabel
              input={{
                name: "price",
                value: formState.price,
                onChange: handleOnChange,
                placeholder: "Price",
                type: "number",
                step: "0.01",
              }}
              id="price"
              label="Price"
              className="mt-1 w-40 rounded-md border-2 border-zinc-300 px-2 sm:text-sm"
              units="€"
            />
            <InputLabel
              input={{
                name: "discount",
                value: formState.discount,
                onChange: handleOnChange,
                placeholder: "Discount (%)",
                type: "number",
              }}
              id="discount"
              label="Discount"
              className="mt-1 w-40 rounded-md border-2 border-zinc-300 px-2 sm:text-sm"
              units="%"
            />
          </div>

          {/* Stock & category */}
          <div className="mx-auto flex flex-col gap-2">
              <InputLabel
                input={{
                  name: "stock",
                  value: formState.stock,
                  onChange: handleOnChange,
                  placeholder: "Units in stock",
                  type: "number",
                }}
                id="stock"
                label="Stock"
                className="mt-1 w-40 rounded-md border-2 border-zinc-300 px-2 sm:text-sm"
                units="u"
              />
             
            <div className="w-full">
              <label
                className="block text-xs font-medium text-zinc-500"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                onChange={handleOnChange}
                className="mt-1 w-40 rounded-md border-2 border-zinc-300 px-2 sm:text-sm"
              >
                <option value="headphones">Headphones</option>
                <option value="speakers">Speakers</option>
              </select>
            </div>
          </div>
        </div>

        <div className="m-2 w-full">
          <p className="block text-xs font-medium text-gray-700">Add Image</p>
          <div className="mt-1 flex flex-wrap justify-center gap-2 rounded-xl border-2 border-zinc-300 bg-zinc-100  p-2 shadow-inner sm:w-full">
            <div className="w-32 ">
              <label className="flex h-32  items-center justify-center rounded-2xl  bg-zinc-300 duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg">
                <input type="file" onChange={handleFileUpload} hidden />
                <img className="h-max" src={plusIcon} />
              </label>
            </div>
            {imageUrlList.map((item, i) => (
              <div className="w-32" key={item.url}>
                <img className="w-full" src={item.url} alt="picture uploaded" />
                <p className="w-full truncate text-center font-semibold ">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

        </div>

        <div className="m-auto flex gap-4">
          <ButtonText  text={"Add Product"}/>
          <ButtonText handleClick={handleCancel} text={"Cancel"} variant={"secondary"}/>
        </div>
      </form>
    </div>
  );
}
