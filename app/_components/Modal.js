"use client";

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

export const ModalContext = createContext();
function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");

  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => {
      open(opens);
    },
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;
  return (
    <div className="bg-white px-6 py-4 w-4/12 rounded-lg shadow-lg shadow-gray-300 space-y-2 ">
      <div className="flex justify-end">
        <IoClose
          className="text-3xl text-second-main cursor-pointer"
          onClick={close}
        />
      </div>
      {children}
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
