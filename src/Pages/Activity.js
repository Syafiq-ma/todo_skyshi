import React from "react";
import Header from "../Components/Header";
import todoEmpty from "../Images/todo-empty-state.png"
import plus from "../Images/plus.png"

const Activity = () => {
    return(
        <div>
            <Header/>
            <div className="mx-56">
                <div className="flex mt-11 justify-between">
                    <div data-cy="todo-title" className="text-4xl font-bold text-black">Activity</div>
                    <button data-cy="todo-add-button" className="bg-blue text-white-100 flex items-center px-7 rounded-3xl">
                        <img src={plus} width={12} className="mr-2" alt="plus"/>
                        Tambah
                    </button>
                </div>
            </div>

            <div data-cy="todo-empty-state" className="flex justify-center mx-56">
                <img src={todoEmpty} width={541} className="mt-24 mb-72" alt="todo empty state"/>
            </div>
        </div>
    )
}

export default Activity