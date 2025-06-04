"use client";

import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { sendHistory } from "../_lib/actions";
import Input from "./Input";
import Modal from "./Modal";
import { useLocale } from "next-intl";

function ModalAddPreviosHistory({ docID, patientID }) {
  const local = useLocale();
  const [isSending, setIsSending] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm();

  const send = async (data) => {
    const sendData = {
      message: data.message,
      sender: docID,
      reciever: patientID,
      time: format(new Date(), "hh:mm:ss"),
      date: format(new Date(), "yyyy-MM-dd"),
      image: null,
      receiver: patientID,
    };
    setIsSending(true);
    await sendHistory(sendData);
    setIsSending(false);

    reset();
  };
  return (
    <div
      className={`absolute ${
        local === "en" ? "left-5" : "right-5"
      } bottom-0 w-full`}
    >
      <Modal>
        <Modal.Open opens={"addPreviosHistory"}>
          <button
            className={`fixed ${
              local == "ar" ? "left-6" : "right-6"
            }  bottom-6 bg-second-main text-5xl text-white p-2   flex justify-center items-center rounded-full`}
          >
            <IoMdAdd />
          </button>
        </Modal.Open>
        <Modal.Window name={"addPreviosHistory"}>
          <h2 className="text-2xl text-second-main font-bold">
            send a message
          </h2>
          <form onSubmit={handleSubmit(send)} className="space-y-2">
            <Input
              disabled={isSending}
              register={register("message", {
                required: "the filed is required",
              })}
              error={errors?.message?.message}
            />
            <div className="flex justify-end">
              <button
                disabled={isSending}
                className="   bg-second-main text-white p-2 rounded-lg text-2xl"
              >
                <CiLocationArrow1 />
              </button>
            </div>
          </form>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ModalAddPreviosHistory;
