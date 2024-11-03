function Input({ label, type = "text" }) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="capitalize text-[#666666]">{label}</label>
      <input
        className="border border-[#666666] border-opacity-40 rounded-xl px-2 py-3 w-full"
        type={type}
      />
    </div>
  );
}

export default Input;
