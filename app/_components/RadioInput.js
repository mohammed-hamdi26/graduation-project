function RadioInput({ label, name, htmlFor, register, value }) {
  return (
    <div className="flex items-center gap-2">
      <label className="capitalize text-[#666666]">{label}</label>
      <label className="relative w-fit h-5 cursor-pointer " htmlFor={htmlFor}>
        <input
          value={value}
          type="radio"
          name={name}
          {...register}
          className="appearance-none  w-5 h-5  border-2 border-[#666666] checked:border-second-main  peer cursor-pointer rounded-full"
          id={htmlFor}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 bg-second-main rounded-full"></span>
      </label>
    </div>
  );
}

export default RadioInput;
