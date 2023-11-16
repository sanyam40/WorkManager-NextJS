"use client";
import React from 'react'
import Link from 'next/link'

export default function CustomNav() {
  return (
    <div>
      <nav className='bg-blue-600 h-12 py-2 px-36 flex justify-between items-center'>
       <div className='brand'><h1><a href="#!">Work Manager</a></h1></div>
       <div><ul className='flex space-x-5 '>
        <li><Link href={'/'} className='hover:text-blue-200'>Home</Link></li>
        <li><Link href={'/add-task'} className='hover:text-blue-200'>Add Task</Link></li>
        <li><Link href={'/show-task'}>Show Task</Link></li>
       </ul></div>
       <div><ul className='flex space-x-5 '>
        <li><a href="">Login</a></li>
        <li><a href="">SignUp</a></li>
       </ul></div>
      </nav>
    </div>
  )
}
