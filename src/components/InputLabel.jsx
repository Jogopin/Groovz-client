export default function InputLabel({
  input={},
  label,
  id,
  className = "mt-1 w-full rounded-md border-2 border-zinc-300 px-2 sm:text-sm disabled:border-none disabled:bg-transparent",
  units = ""
}) {
  const defaultInput ={
    required:true,
    type:"text"
  }
  const inputProperties={...defaultInput,...input}

  return (
    <div className="m-2 w-full ">
      <label htmlFor={id} className="block text-xs font-medium text-gray-700">
        {label}
      </label>

      <input
        {...inputProperties}
        id={id}
        className={className}
      />
      {units ? <span className="px-1 font-medium text-gray-700">{units}</span> : null}
    </div>
  );
}
