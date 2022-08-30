import axios from "axios";
import React from "react";
import InformationIcon from "../Images/modal-information-icon.png"
const DeleteModal = (props) =>{
  return (
    <>
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-4 mx-auto w-2/5">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-100 outline-none focus:outline-none">
                <div className="relative p-6 flex flex-col justify-center items-center">
                    <img src={InformationIcon} width={24}/>
                    <div className="font-medium text-lg text-left mt-12">
                        Activity berhasil dihapus
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    </>
  );
}

export default DeleteModal