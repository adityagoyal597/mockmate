function Button({
  children,
  variant = "primary",
  onClick,
}) {

  const baseStyles =
    "px-6 py-3 rounded-xl font-medium transition duration-200";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg",

    secondary:
      "border border-gray-300 hover:bg-gray-100",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;