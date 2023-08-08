export default function ButtonText({handleClick,text,alt,iconImage,disabled,variant}) {
    const buttonStyle = variant === "secondary" ? "btn-secondary" : "btn-primary";
  return (
    <button
      onClick={handleClick}
      className={` ${buttonStyle} flex h-14  items-center justify-evenly`}
      disabled={disabled}
    >
      {iconImage ? <img src={iconImage} className="w-8 invert" alt={alt} /> :<></>}
      {text ? <span>{text}</span> : <></>}
    </button>
  );
}
