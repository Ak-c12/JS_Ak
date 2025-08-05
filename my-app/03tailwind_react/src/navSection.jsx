// import React from 'react'

function NavSection() {
  return (
    <div>
      <header className='bg-gray-800 p-4 flex justify-between items-center'>
        <h1 className='text-white text-2xl font-bold hover:shadow-4'>My Website</h1>
        <nav className='mt-4'>
          <ul className='flex space-x-4 m-4'>
            <li>
              <a href='#Home' className='text-blue-500 hover:underline'>
                Home
              </a>
            </li>
            <li>
              <a href='#About' className='text-blue-500 hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='#Contact' className='text-blue-500 hover:underline'>
                Contact
              </a>
            </li>
            <li>
              <a href='#Services' className='text-blue-500 hover:underline'>
                Services
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavSection;