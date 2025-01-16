import React from "react";
import { modelClose } from "../../../helpers";

interface ModalProps {
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDialogElement>;
}
const Modal = ({ children, modalRef }: ModalProps) => {
  return (
    <>
      <dialog  className="modal" ref={modalRef}>
        <div className="modal-box">
          <button onClick={()=>{
            if(modalRef?.current){
                modelClose(modalRef)
            }
          }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <div>
            {children}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
