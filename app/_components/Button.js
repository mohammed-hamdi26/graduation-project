function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${className} +
        bg-main px-4 py-3 rounded-full text-lg font-bold text-white  uppercase`}
    >
      {children}
    </button>
  );
}

export default Button;
