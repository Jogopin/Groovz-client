import { useRef } from "react";
import InputLabelText from "../components/InputLabelText";

export default function AddProduct() {
  const name = useRef(null);
  const reference = useRef(null);
  const description = useRef(null);
  const price = useRef(null);
  const discount = useRef(null);
  const stock = useRef(null);
  const category = useRef(null);

  const handleSubmit = () => {};
  const handleCancel = () => {};
  return (
    <div className="flex">
      <form className="mx-auto my-10 flex flex-col items-start gap-4 ">
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
        <div className="m-auto flex gap-4">
          <button
            onClick={handleSubmit}
            className="btn-primary m-auto px-4 py-2"
          >
            Add Product
          </button>
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
