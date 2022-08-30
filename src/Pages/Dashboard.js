import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import plus from "../Images/plus.png"
import emptyState from "../Images/activity-empty-state.png"
import Card from "../Components/Card";

const Dashboard = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        getData()
    })
    const getData = async () => {
        const {data} = await axios.get('https://floating-mountain-35184.herokuapp.com/activity-groups')
        setData(data.data.reverse())
    }
    const addNewActivity = async () => {
        await axios.post(
            'https://floating-mountain-35184.herokuapp.com/activity-groups', 
            {"email": "blabla@gmail.com", "title":"New Activity"},  
        )
    }
    return(
        <div>
            <Header/>
            <div className="mx-56">
                <div className="flex mt-11 justify-between">
                    <div className="text-4xl font-bold text-black">Activity</div>
                    <button data-cy="activity-add-button" className="bg-blue text-white-100 flex items-center px-7 rounded-3xl" onClick={()=>addNewActivity()}>
                        <img src={plus} width={12} className="mr-2" alt="plus"/>
                        Tambah
                    </button>
                </div>
            </div>
            
            {data&&
                <div className="mx-48 grid grid-cols-4 mt-12 mb-64">
                    {data.map((data,i)=>(
                        <Card key={i} data={data}/>
                    ))}
                </div>
            }
            
            <div data-cy="activity-empty-state" className="flex justify-center mx-56">
                {!data&&<img src={emptyState} width={700} className="mt-40 mb-64" alt="activity empty state"/>}
            </div>
        </div>
    )
}

export default Dashboard