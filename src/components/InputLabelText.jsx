export default function InputLabelText({
  placeholder,
  label,
  id,
  onChange,
  name,
  value,
  type = "text",
  required = true,
}) {
  return (
    <>
      <div className="m-2 w-full ">
        <label htmlFor={id} className="block text-xs font-medium text-gray-700">
          {label}
        </label>

        <input
          value={value}
          name={name}
          onChange={onChange}
          type={type}
          id={id}
          className="mt-1 w-full rounded-md border-2 border-zinc-300 px-2 sm:text-sm"
          placeholder={placeholder}
          required={required}
        />
      </div>
      
    </>
  );
}
