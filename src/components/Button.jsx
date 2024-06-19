const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
    className={`flex justify-center items-center
    gap-2 px-7 py-4 text-lg rounded-full border
    ${fullWidth && "w-full"}
    ${ backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
    "text-white border-blue-500 bg-coral-red" }
    font-montserrat leading-none `}
    >
      {label}
      {iconURL &&
      <img
      alt="arrow right icon"
      src={iconURL}
      className="ml-2 rounded-full w5 h-5 "
      />}
    </button>
  )
}

export default Button