"use client";

import { IoMdAdd } from "react-icons/io";
import Modal from "./Modal";
import Input from "./Input";
import { CiLocationArrow1 } from "react-icons/ci";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { sendHistory } from "../_lib/actions";

function ModalAddPreviosHistory({ docID, patientID }) {
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
    };
    setIsSending(true);
    await sendHistory(sendData);
    setIsSending(false);
    close();
    reset();
  };
  return (
    <div className="absolute left-0 bottom-0 w-full">
      <Modal>
        <Modal.Open opens={"addPreviosHistory"}>
          <button className="fixed right-6 bottom-6 bg-second-main text-5xl text-white p-2   flex justify-center items-center rounded-full">
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
