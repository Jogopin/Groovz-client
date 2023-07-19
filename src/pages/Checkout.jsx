import { useCart } from "../hooks/useCart";
import { useEffect, useState } from "react";

import {
  getUserDetails,
  startCheckout,
  updateUserDetails,
} from "../services/api";
import InputLabelText from "../components/InputLabelText";
import { useAuth } from "../hooks/useAuth";

export default function Checkout() {
  const { cartProducts, totalPrice } = useCart();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [isSaveAddressChecked, setIsSaveAddressChecked] = useState(true);
  const { user } = useAuth()
  const [canCheckout, setCanCheckout] = useState(false);

  const checkoutValidator = () => {
    if (firstName && lastName && address && email && cartProducts.length > 0) {
      setCanCheckout(true);
    } else {
      setCanCheckout(false);
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    (async () => {
      try {
        const userDetails = await getUserDetails(user._id);
        setFirstName(userDetails.firstName ?? "");
        setLastName(userDetails.lastName ?? "");
        setAddress(userDetails.address ?? "");
        setEmail(userDetails.email);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [user]);

  useEffect(() => {
    checkoutValidator();
  }, [firstName, lastName, address, email, cartProducts]);

  const saveAddressInDB = async () => {
    if (!isSaveAddressChecked) {
      return;
    }
    try {
      const userData = {
        userId: user._id,
        firstName,
        lastName,
        address,
      };
      await updateUserDetails(userData);
    } catch (error) {
      console.log("error in updateUserPersonalDetails", error);
    }
  };

  const handleCheckOut = async () => {
    const productsToCheckout = cartProducts.map((item) => {
      return { reference: item.reference, quantity: item.quantity };
    });
    const customerData = {
      firstName,
      lastName,
      address,
      email,
      userId: user ? user._id : null,
    };

    try {
      await saveAddressInDB();
      const url = await startCheckout({ productsToCheckout, customerData });
      window.location.href = url;
    } catch (error) {
      console.log(error);
    }
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
                            className="mr-4 h-16 w-16"
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
                          <button className="ml-3 rounded-md border px-4 py-2">
                            -
                          </button>
                          <span className="w-8 text-center">
                            {prod.quantity}
                          </span>
                          <button className="mr-2 rounded-md border px-4 py-2">
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
            <section className="mb-4 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Your Details</h2>
              <div className="flex flex-wrap justify-evenly">
                <div className="flex w-full">
                  <InputLabelText
                    label={"Name"}
                    id={"Name"}
                    name={"firstName"}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                  />
                  <InputLabelText
                    label={"Last Name"}
                    id={"last-name"}
                    name={"lastName"}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                  />
                </div>
                <InputLabelText
                  label={"Shipping address"}
                  id={"address-input"}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street, City, Country"
                />
                <InputLabelText
                  label={"Email"}
                  value={email}
                  name={"email"}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="johnDoe@example.com"
                  disabled={user ? true : false}
                />
              </div>
              <label className="mx-2 my-4 block text-right text-xs font-medium text-gray-700 ">
                {"Remember my details "}
                <input
                  type="checkbox"
                  checked={isSaveAddressChecked}
                  onChange={() => setIsSaveAddressChecked((prev) => !prev)}
                  className="accent-red-700"
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
