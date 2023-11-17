"use client";

import { addTask } from '@/services/taskService';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export default function AddTask() {

  const [task,setTask]=useState({
    title: '',
    content: '',
    status: 'none',
    userId:'65547b5bbe7fdc5da1861fd4'
  });

  const handleClear = () => {
    setTask({
      title: '',
      content: '',
      status: 'none',
      userId: '65547b5bbe7fdc5da1861fd4'
    });
  };


  const handleSubmit=async(event)=>{
    event.preventDefault();
    try{
      console.log(task);
      await addTask(task);
      toast.success('Task Added Successfully');

      handleClear();

    }catch(error){
      console.log(error);
      toast.error('Something went wrong');
    }    
  }

  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 p-5 '>
        <h1 className='text-3xl'>Add your task here </h1>
        <form action="#!"  onSubmit={handleSubmit}>
          <div className='mt-4'>
            <label htmlFor="task_title" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" className="w-full p-3 rounded-3xl bg-gray-500 focus:ring-gray-400-100 border-gray-800"
            id="task_title" name="task_title" onChange={(event)=>{setTask({...task,title:event.target.value});}} value={task.title}/>          
            </div>
          <div className='mt-4'>
            <label htmlFor="task_content" className='block text-sm font-medium mb-2'>Content</label>
            <textarea className='w-full p-3 rounded-3xl bg-gray-500 focus:ring-gray-400-100 border-gray-800' id="task_content" 
            cols="5" name="task_content" onChange={(event)=>{setTask({...task,content:event.target.value});}} value={task.content}></textarea>
          </div>
          <div className="mt-4">
            <label htmlFor="task_status" className='block text-sm font-medium mb-2'>Status</label>
            <select className='w-full p-3 rounded-3xl bg-gray-500 focus:ring-gray-400-100 border-gray-800' 
            id="task_status" name="task_status" onChange={(event)=>{setTask({...task,status:event.target.value});}} value={task.status}>
              <option value="none" disabled>---Select Status---</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>ADD TODO</button>
            <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3'>CLEAR</button>
          </div>
        </form>
      </div>
    </div>
  )
}
