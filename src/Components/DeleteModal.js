import axios from "axios";
import React from "react";
import DeleteIcon from "../Images/modal-delete-icon.png"
const DeleteModal = (props) =>{
  const deleteActivity = () => {
    axios.delete(`https://floating-mountain-35184.herokuapp.com/activity-groups/${props.id}`)
  }
  const deleteHandler = async () => {
    const del = await deleteActivity()
    del()
    props.deleteModalHandler()
  }
  return (
    <>
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div data-cy="modal-delete" className="relative my-4 mx-auto w-2/5">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-100 outline-none focus:outline-none">
                <div className="relative p-6 flex flex-col justify-center items-center">
                    <img src={DeleteIcon} width={81}/>
                    <div className="font-medium text-lg text-center mt-12">
                        Apakah anda yakin akan menghapus activity
                    </div>
                    <div className="font-bold text-lg text-center mb-1">
                        "{props.title}"?
                    </div>
                </div>
                <div className="flex items-center justify-center mb-4 rounded-b">
                  <button
                    className="bg-green-200 text-white bg-white-200 rounded-full font-normal text-lg px-12 py-3.5 mr-4 shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>props.deleteModalHandler()}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-green-200 text-white-100 bg-pink font-normal text-lg px-12 py-3.5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={()=>deleteHandler()}
                  >
                    Hapus
                  </button>
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