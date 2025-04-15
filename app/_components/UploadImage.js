import { useTranslations } from "next-intl";

function UploadImage({ imageChange }) {
  const t = useTranslations("image-preview");
  return (
    <label
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full max-w-[450px] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-second-main hover:bg-[#3F2A7A] transition"
    >
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-lg text-white font-semibold ">
          {t("Click to upload or drag and drop")}
        </p>
        <p className="text-xs text-white ">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <input
        id="dropzone-file"
        type="file"
        class="hidden"
        onChange={imageChange}
      />
    </label>
  );
}

export default UploadImage;
