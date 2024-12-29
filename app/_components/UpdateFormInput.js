function UpdateFormInput({ label, value, type = "text", disabled }) {
  return (
    <div className="flex flex-col gap-2 flex-1 my-3 ">
      <label>{label}</label>
      <input
        disabled={disabled}
        value={value}
        className="border border-[#BCC1CA] px-2 py-2 rounded-lg  focus:outline-second-main disabled:bg-gray-200 "
        type={type}
      />
    </div>
  );
}

export default UpdateFormInput;
