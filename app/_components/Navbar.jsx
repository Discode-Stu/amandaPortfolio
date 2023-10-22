"use client"
import { usePathname } from "next/navigation"

import React, { useState } from "react"
import useClickOutside from "../_hooks/useClickOutside"
import { portfolioOwner } from "../_constants"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const path = usePathname()

  const isAbout = path === "/about"
  const isWork = path === "/work"
  const isHome = path === "/"

  const toggleMenu = () => {
    setShowMenu((prev) => !prev)
  }

  const menuRef = React.useRef(null)

  const closeMenu = () => {
    setShowMenu(false)
  }

  useClickOutside(menuRef, closeMenu)

  return (
    <nav className="bg-white text-black p-4 flex items-center justify-between">
      <div className="text-black text-lg">{portfolioOwner}</div>
      {/* Small Screens - Menu Icon */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-black text-xl p-2 focus:outline-none z-10"
        >
          &#8801;
        </button>
        {showMenu && (
          <div
            ref={menuRef}
            className="absolute top-14 right-2 bg-gray-300 px-4 py-2 rounded shadow-lg"
          >
            <a
              href="/"
              className="block text-black mb-2 hover:text-gray-600 hover:transition hover:duration-300 hover:ease-in-out"
            >
              Home
            </a>
            <a
              href="/about"
              className="block text-black mb-2 hover:text-gray-600 hover:transition hover:duration-300 hover:ease-in-out"
            >
              About me
            </a>
            <a
              href="/work"
              className="block text-black hover:text-gray-600 hover:transition hover:duration-300 hover:ease-in-out"
            >
              Work
            </a>
          </div>
        )}
      </div>

      {/* Large Screens - Links */}
      <div className="hidden sm:flex">
        <a
          href="/"
          className="text-black mx-4"
          style={{ borderBottom: isHome ? "1px solid black" : "none" }}
        >
          Home
        </a>
        <a
          href="/about"
          className="text-black mx-4"
          style={{ borderBottom: isAbout ? "1px solid black" : "none" }}
        >
          About me
        </a>
        <a
          href="/work"
          className="text-black mx-4"
          style={{ borderBottom: isWork ? "1px solid black" : "none" }}
        >
          Work
        </a>
      </div>
    </nav>
  )
}

export default Navbar

// <nav className="bg-white text-black">
//   <div className="container mx-auto px-4">
//     <div className="flex justify-between">
//       <div className="py-6">
//         <a href="/" className="text-2xl font-bold">
//           Amanda Constantine
//         </a>
//       </div>
//       <div className="py-6">
//         <a href="/about">About</a>
//       </div>
//     </div>
//   </div>
// </nav>
