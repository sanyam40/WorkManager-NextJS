import React from 'react'

export default function Footer() {
  return (
    <footer className='h-40 bg-blue-600 mt-5'>
        <div className='flex p-5 justify-around'>
            <div className='text-center flex flex-col justify-center'>
                <h1 className='text-3xl'>Welcome to Work Manager</h1>
                <p>Loreecteturt.osente aliquam ea exercitationem deserunt.</p>
                </div>
                <div className='text-center'>
                    <h1>Important links</h1>
                    <ul>
                        <li><a href="">Fcebook</a></li>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Linkedin</a></li>
                    </ul>
                </div>
            </div>
    </footer>
  )
}
