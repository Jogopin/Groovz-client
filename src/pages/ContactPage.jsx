import { useEffect, useState } from "react";
import InputLabel from "../components/InputLabel";
import { sendContactMessage } from "../services/api";
import { toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import ButtonText from "../components/ButtonText";

export default function ContactPage() {
  const { authUser, isLoggedIn } = useAuth();

  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      email: authUser.email ?? "",
    }));
  }, [authUser]);

  const resetForm = () => {
    setFormState({
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleOnChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactMessage(formState);
      toast.success("Thanks for reaching out! We'll get back to you soon.");
      resetForm();
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js
    }
  };
  return (
    <>
      <section className="m-4 mx-auto md:w-3/4 gap-5 rounded-lg bg-white p-6 text-zinc-800 shadow-md">
        <h2 className="m-4 text-lg font-semibold text-center">Contact us</h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto my-10 flex w-4/6 flex-col items-center gap-4 sm:w-2/5 lg:w-2/5 "
        >
          <InputLabel
            id={"email"}
            label={"Email"}
            input={{
              name: "email",
              value: formState.email,
              onChange: handleOnChange,
              placeholder: "john.doe@email.com",
              type: "email",
            }}
          />
          <InputLabel
            id={"subject"}
            label={"Subject"}
            input={{
              name: "subject",
              value: formState.subject,
              onChange: handleOnChange,
              placeholder: "Let us know how we can help you",
            }}
          />
          <div className="m-2 w-full">
            <label
              className="block text-xs font-medium text-gray-700"
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleOnChange}
              placeholder="Leave a message"
              rows="4"
              cols="50"
              className="mt-1 h-60 w-full rounded-md border-2 border-zinc-300 px-2 sm:h-full"
              required
            />
          </div>
          {/* {errorMessage ? (
          <p className="text-sm text-red-500">{errorMessage}</p>
        ) : (
          <></>
        )} */}
        
            <ButtonText text={"Send message"}/>
          
        </form>
      </section>
    </>
  );
}
