import React, {useState} from "react";
import Trash from "../Images/trash.png"
import DeleteModal from "./DeleteModal";
import {Link} from 'react-router-dom'

const Card = (props) => {
    const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let date = Date.parse(props.data.created_at)
    date = new Date(date)
    let dateString = date.getDate() +" "+ month[date.getMonth()] + " " + date.getFullYear()

    const [deleteModal,setDeleteModal] = useState(false)
    const deleteModalHandler = () => {
        setDeleteModal(!deleteModal)
    }
    const link = "/" + props.data.id
    return(
        <Link to={link}>
        <div data-cy="activity-item" className="bg-white-100 mx-2 my-2.5 rounded-xl p-6 " style={{height:'234px', boxShadow:'0px 6px 10px rgba(0, 0, 0, 0.1)'}}>
            <div className="flex flex-wrap text-lg font-bold">{props.data.title}</div>
            <div className="flex justify-between mt-32">
                <div className="text-grey-200 text-sm font-medium">{dateString}</div>
                <img src={Trash} width={16} onClick={()=>setDeleteModal(true)}/>
            </div>
            {deleteModal&&<DeleteModal title={props.data.title} id={props.data.id} deleteModalHandler={deleteModalHandler}/>}
        </div>
        </Link>
    )
}

export default Card