"use client";
import { CiLocationArrow1 } from "react-icons/ci";
import Input from "./Input";
import Modal from "./Modal";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { addMedication } from "../_lib/actions";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import Spinner from "./Spinner";

function ModalAddAlarm() {
  const local = useLocale();
  const t = useTranslations("Medication reminder");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  async function submit(data) {
    try {
      await addMedication(data);
      toast.success(t("Medication added successfully"));
      reset();
    } catch (e) {
      toast.error(t("Medication not added"));
    }
  }
  return (
    <div
      className={`absolute ${
        local === "en" ? "left-5" : "right-5"
      } bottom-5 z-30 w-full`}
    >
      <Modal>
        <Modal.Open opens={"addMedication"}>
          <button
            className={`fixed ${
              local == "ar" ? "left-5" : "right-5"
            } bottom-6 bg-second-main text-5xl text-white p-2   flex justify-center items-center rounded-full`}
          >
            <IoMdAdd />
          </button>
        </Modal.Open>
        <Modal.Window name={"addMedication"}>
          <h2 className="text-2xl text-second-main font-bold">
            {t("Add Medication")}
          </h2>
          <form onSubmit={handleSubmit(submit)} className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                label={t("pill Name")}
                register={register("pill_name", {
                  required: "the filed is required",
                })}
                error={errors?.pill_name?.message}
              />
              <Input
                type="time"
                label={t("Time Pill")}
                register={register("alarm_time", {
                  required: "the filed is required",
                })}
                error={errors?.alarm_time?.message}
              />
            </div>
            <div className="flex justify-end">
              <button
                disabled={isSubmitting}
                className="bg-second-main text-white p-2 rounded-lg text-2xl disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-500"
              >
                {!isSubmitting ? (
                  <CiLocationArrow1
                    className={`${local === "ar" && "rotate-[270deg]"}`}
                  />
                ) : (
                  <Spinner size={20} />
                )}
                {/* <CiLocationArrow1
                  className={`${local === "ar" && "rotate-[270deg]"}`}
                /> */}
              </button>
            </div>
          </form>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ModalAddAlarm;
