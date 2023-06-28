export default function InputLabelText({
  placeholder,
  label,
  id,
  name,
  inputRef,
  type = "text", //default value is set to "text"
  required = true,
}) {
  return (
    <div className="flex items-center">
      <label className=" w-32 font-semibold" htmlFor={id}>
        {label}{" "}
      </label>
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="w-52 rounded-md border-2 border-zinc-800 px-2 py-1"
        id={id}
        name={name}
        type={type}
        required={required}
      />
    </div>
  );
}
