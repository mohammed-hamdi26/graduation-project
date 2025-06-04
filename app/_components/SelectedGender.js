import RadioInput from "./RadioInput";

function SelectedGender({ label, register }) {
  return (
    <div className="">
      <label className={`w-fit capitalize  text-[#666666]   `}>{label}</label>
      <div className="flex items-center gap-2">
        <RadioInput
          register={register}
          label="Male"
          name="gender"
          value={"M"}
          htmlFor={"male"}
        />
        <RadioInput
          register={register}
          label="Female"
          name="gender"
          value={"F"}
          htmlFor={"female"}
        />
      </div>
    </div>
  );
}

export default SelectedGender;
