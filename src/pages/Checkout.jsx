import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";
import { startCheckout } from "../services/api";
import InputLabel from "../components/InputLabel";
import { useAuth } from "../hooks/useAuth";
import useUserById from "../hooks/useUserById";
import EditableUserInfo from "../components/EditableUserInfo";

export default function Checkout() {
  const { cartProducts, totalPrice, addToCart, removeProductFromCart } =
    useCart();
  const [checkoutUserDetails, setCheckoutUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email:""
  });
  
  const [isSaveAddressChecked, setIsSaveAddressChecked] = useState(false);
  const { authUser, isLoggedIn } = useAuth();

  const { requestedUserDetails,saveUserDetails } = useUserById(authUser?._id);

  const canCheckout =
    checkoutUserDetails.firstName &&
    checkoutUserDetails.lastName &&
    checkoutUserDetails.address &&
    checkoutUserDetails.email &&
    cartProducts.length > 0;

  useEffect(() => {
    if (!isLoggedIn) return;
    setCheckoutUserDetails({
      firstName: requestedUserDetails.firstName ?? "",
      lastName: requestedUserDetails.lastName ?? "",
      address: requestedUserDetails.address ?? "",
      email :requestedUserDetails.email ?? ""
    });
    
  }, [requestedUserDetails]);

  const saveUserDataInDB = async () => {
    if (!isSaveAddressChecked) {
      return;
    }
    try {
      const formUserData = {
        userId: authUser._id,
        firstName: checkoutUserDetails.firstName,
        lastName: checkoutUserDetails.lastName,
        address: checkoutUserDetails.address,
      };
      await saveUserDetails(formUserData);
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js
    }
  };

  const handleCheckOut = async () => {
    const productsToCheckout = cartProducts.map((item) => {
      return { reference: item.reference, quantity: item.quantity };
    });
    const customerData = {
      firstName: checkoutUserDetails.firstName,
      lastName: checkoutUserDetails.lastName,
      address: checkoutUserDetails.address,
      email: checkoutUserDetails.email,
      userId: authUser ? authUser._id : null,
    };

    try {
      await saveUserDataInDB();
      const url = await startCheckout({ productsToCheckout, customerData });
      window.location.href = url;
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js
    }
  };

  const handleClickMinus = (productData) => {
    removeProductFromCart(productData.reference);
  };
  const handleClickPlus = (productData) => {
    addToCart(productData);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Cart & Details */}
          <div className="md:w-3/4">
            {/* Cart */}
            <section className="mb-4 overflow-auto rounded-lg bg-white p-2 shadow-md md:p-6">
              <h2 className="mb-4 text-lg font-semibold">Shopping Cart</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-center font-semibold">Quantity</th>
                    <th className="text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((prod) => (
                    <tr key={prod._id}>
                      <td className="py-4">
                        <div className="flex flex-col  items-center sm:flex-row">
                          <img
                            className="mr-4 h-16 w-16 rounded-md"
                            src={prod.images[0]}
                            alt="Product image"
                          />
                          <span className="truncate font-semibold">
                            {prod.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">€{prod.price.toFixed(2)}</td>
                      <td className="py-4">
                        {/* Quantity Control */}
                        <div className="flex items-center justify-center">
                          <button
                            onClick={(e) => {
                              handleClickMinus(prod);
                            }}
                            className="ml-3 rounded-md border px-3 py-1 hover:bg-zinc-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">
                            {prod.quantity}
                          </span>
                          <button
                            onClick={(e) => {
                              handleClickPlus(prod);
                            }}
                            className="mr-2 rounded-md border px-3 py-1 hover:bg-zinc-300"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-right">
                        €{(prod.price * prod.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
            {/* Customer Details */}
            <section className="mb-4 flex flex-col gap-5 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Your Details</h2>
              <EditableUserInfo
                userPersonalDetails={checkoutUserDetails}
                setUserPersonalDetails={setCheckoutUserDetails}
                isEditing={true}
              />
              <InputLabel
                label={"Email"}
                id={"email"}
                input={{
                  name: "email",
                  value: checkoutUserDetails.email,
                  onChange: setCheckoutUserDetails,
                  type: "email",
                  placeholder: "johnDoe@example.com",
                  disabled: authUser ? true : false,
                }}
              />

              <label className="mx-2 my-4 block text-right text-xs font-medium text-gray-700 ">
                {"Remember my details "}
                <input
                  type="checkbox"
                  checked={isSaveAddressChecked}
                  onChange={() => setIsSaveAddressChecked((prev) => !prev)}
                  className="accent-red-700"
                  disabled={!isLoggedIn}
                />
              </label>
            </section>
          </div>
          {/* Summary */}
          <section className="md:w-1/4 ">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Summary</h2>
              <div className="mb-2 flex justify-between">
                <span>Subtotal</span>
                <span>€{totalPrice}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-2" />
              <div className="mb-2 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">€{totalPrice}</span>
              </div>
              <button
                className="btn-primary mt-4 w-full"
                onClick={handleCheckOut}
                disabled={!canCheckout}
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
