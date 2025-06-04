"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [isHidden, setIsHidden] = useState(true);
  const t = useTranslations("login");
  return (
    <div className="flex flex-col gap-1 flex-1">
      <div className="flex justify-between items-center">
        <label
          htmlFor={register?.name}
          className={`w-fit capitalize ${
            error ? "text-red-700" : " text-[#666666]"
          }   `}
        >
          {label}*
        </label>
        {type === "password" && (
          <p
            onClick={() => setIsHidden(!isHidden)}
            className="text-second-main cursor-pointer"
          >
            {isHidden ? (
              <span className="flex items-center gap-2">
                <FaEye /> {t("show")}
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <FaEyeSlash /> {t("hide")}
              </span>
            )}
          </p>
        )}
      </div>
      <input
        id={register?.name}
        className={`  border-2 ${
          error ? "border-red-700" : "border-[#666666] border-opacity-40"
        }    rounded-xl px-2 py-3 w-full focus:outline-second-main focus:border-second-main disabled:bg-gray-200  `}
        {...register}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onInput={onInput}
        type={isHidden ? type : "text"}
      />
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
}

export default Input;
