
import React from 'react'
import { useState } from 'react'
const Main = () => {
    const [Title, setTitle] = useState("")
    const [Task, setTask] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
    const preventDefault=(e)=>{
        e.preventDefault()
        if(Title!==""){
        setTitle("")
        setErrorMessage("")
        setTask([...Task,{Title}])}
        else{
            
            setErrorMessage("Please enter a title for the task!");

        }
    }
    let dlt = (index)=>{
        let items = [...Task]
        items.splice(index,1)
        setTask(items)
    }
    let render = <h1 className='ml-1 font-bold'> No task Avalible</h1>
    if (Task.length>0){
    render = Task.map((value,index)=>{
        return <>
        <div key={index} className='flex justify-between mr-1 ml-1 font-medium'>
            <p className='mt-1 p-2'> {value.Title} </p>
            <button onClick={()=>{
                dlt(index)

            }} className='bg-green-600 p-2 mt-1 rounded text-white hover:bg-red-700'> Delete</button>
        </div>
        </>
    })}
  return (
    <>
<div className='h-screen bg-slate-300 flex justify-center'>
    <div className='container bg-white h-96 w-2/4  mt-3 rounded flex'>
         <div className='bg-black w-2/4'>
            <img src="./images/img.jpg" alt='' className='w-full h-full object-cover border-none'>
            </img>
            </div>
         <div className='bg-sky-300 w-2/4 '>
                <form onSubmit={preventDefault}>
                    <input type='text' placeholder='Enter Title' className='font-semibold p-3 mx-5 mt-2 rounded 
                    outline-none
                    leading-tight focus:outline-none focus:shadow-outline ' value={Title} onChange={(e)=>{
                        setTitle(e.target.value)
                    }} /> <br/>
                    <button className='p-2 mx-5 bg-sky-600 mt-2 w-2/4 rounded font-semibold text-white'> Add </button>
                </form>
                <div className=' bg-white mt-6 h-64 '>
                    {render}
                </div>
         </div>

              </div>
                      </div>
    </>
  )
}

export default Main