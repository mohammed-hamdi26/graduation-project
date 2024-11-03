function Form({ children }) {
  return (
    <form className="bg-white  px-9 py-12 rounded-3xl w-full md:w-2/5 space-y-6">
      {children}
    </form>
  );
}

export default Form;
