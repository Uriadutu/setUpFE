import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between fixed w-full px-7 py-5 bg-blue-700">
        <div className="flex">Logo Apk</div>
        <div className="flex justify-between gap-5">
            <Link to={"/"}>
                Home
            </Link>
            <Link to={"/"}>
                Home 2
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
