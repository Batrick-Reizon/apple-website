import React, { useState } from "react"
import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

function Navbar() {
    const [menu, setmenu] = useState(false)

    const navLink = [
        {
            name: "Store",
            href: "#"
        },
        {
            name: "Mac",
            href: "#"
        },
        {
            name: "iPad",
            href: "#"
        },
        {
            name: "iPhone",
            href: "#"
        },
        {
            name: "Watch",
            href: "#"
        },
        {
            name: "Vision",
            href: "#"
        },
        {
            name: "AirPods",
            href: "#"
        },
        {
            name: "Tv&Home",
            href: "#"
        },
        {
            name: "Entertainment",
            href: "#"
        },
        {
            name: "Accessories",
            href: "#"
        },
        {
            name: "Support",
            href: "#"
        }
    ]

    return (<nav className="bg-black/80 p-3 backdrop-blur-sm fixed w-full top-0 z-10">
        <div className="flex justify-between sm:justify-center items-center text-gray-300 font-medium">
            <FaApple className="cursor-pointer hover:text-white"></FaApple>
            <ul className="hidden sm:flex gap-5 ml-5">
                {navLink.map((data, index) => {
                    return <li href={data.href} key={index} className="hover:text-white hover:underline w-fit cursor-pointer">{data.name}</li>
                })}
            </ul>
            <div className="flex gap-5 ml-5">
                <FaSearch className="cursor-pointer hover:text-white"></FaSearch>
                <FaShoppingBag className="cursor-pointer hover:text-white"></FaShoppingBag>
                <FaBars className="flex sm:hidden cursor-pointer" onClick={() => setmenu(true)}></FaBars>
            </div>
        </div>
        {<div className="bg-gray-900 fixed top-0 right-0 text-white w-1/2 h-screen transition-all ease-in-out duration-1000 p-5" style={{top: menu ? "0%" : "-1600%"}}>
            <div className="flex justify-end py-3"><FaXmark className="hover:text-red-600" onClick={() => setmenu(false)}></FaXmark></div>
            <ul>
                {navLink.map((data, index) => {
                    return <li href={data.href} key={index} className="hover:text-white py-3 hover:underline w-fit cursor-pointer">{data.name}</li>
                })}
            </ul>
        </div>}
    </nav>)
}

export default Navbar