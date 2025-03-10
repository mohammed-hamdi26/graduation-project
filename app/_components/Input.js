function Input({
  label,
  type = "text",
  error,
  register,
  name,
  value,
  onChange,
  onInput,
  disabled,
}) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="capitalize text-[#666666]">{label}</label>
      <input
        className="border border-[#666666] border-opacity-40 rounded-xl px-2 py-3 w-full"
        {...register}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onInput={onInput}
        // name={name}
        type={type}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default Input;
