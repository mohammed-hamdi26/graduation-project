function FormRow({ children }) {
  return (
    <div className=" flex  flex-col sm:flex-row sm:items-center sm:gap-4   ">
      {children}{" "}
    </div>
  );
}

export default FormRow;
