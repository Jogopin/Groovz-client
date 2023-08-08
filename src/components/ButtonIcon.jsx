export default function ButtonIcon({ handleClick, iconImage, alt, variant }) {
    const buttonStyle = variant === "secondary" ? "bg-zinc-400" : "bg-red-700";
  
    return (
      <button
        onClick={handleClick}
        className={`${buttonStyle} h-8 w-8 rounded-md p-0.5 duration-200 ease-in hover:scale-110 active:bg-zinc-400`}
      >
        <img className="invert" src={iconImage} alt={alt} />
      </button>
    );
  }
  