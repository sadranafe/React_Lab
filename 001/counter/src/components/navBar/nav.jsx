import NavLogo from "./navLogo";
import { useState } from "react";

const Nav = () => {
    const [menuIsOpen , setMenuIsOpen] = useState(false)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)    
    }
    
    return (
        <>
            <div className = 'flex flex-wrap justify-between items-center bg-neutral-800 p-2 px-4 w-full'>

                <div className = 'flex flex-wrap w-6/12 min-[930px]:flex-nowrap items-center justify-start md:w-2/12 min-[930px]:w-1/12'>
                    
                    <button onClick = {menuHandler} className = 'block md:hidden cursor-pointer mr-3 p-2 transition-all'>
                        <i className = { menuIsOpen ? 'w-6 h-0.5 my-2 rotate-45 -translate-y-0 transition-all block rounded-sm bg-white' : "w-6 h-0.5 my-2 transition-all block rounded-sm bg-white"}></i>
                        <i className = { menuIsOpen ? 'w-6 h-0.5 my-2 -rotate-45 -translate-y-2.5 transition-all block rounded-sm bg-white' : "w-6 h-0.5 my-2 transition-all block rounded-sm bg-white"}></i>
                    </button>

                    <NavLogo />
                    <p className = 'uppercase text-white max-[929px]:text-sm font-semibold'>acme</p>
                </div>

                <div className = 'hidden capitalize md:flex md:flex-wrap justify-center items-center text-white max-[929px]:w-8/12 min-[930px]:w-9/12'>
                    <div className = 'mx-2'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>home</a>
                    </div>

                    <div className = 'mx-2'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>products</a>
                    </div>

                    <div className = 'mx-2'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>about us</a>
                    </div>
                </div>


                <div className = 'capitalize w-4/12 md:w-2/12 max-[929px]:text-sm flex flex-wrap justify-end items-center'>
                    <button href = "#" className = "p-2 px-2 mx-2 text-2xl flex items-center justify-center text-blue-200 hover:-translate-y-1 transition-all rounded-xl">
                        <i className = "bx bx-cart"></i>
                    </button>

                    <a href = "#" className = 'bg-transparent border-blue-200 text-blue-200 border hover:bg-blue-200 transition-all hover:text-black p-2 rounded-xl'>sign up</a>
                </div>

                <div className = {menuIsOpen ? 'md:hidden capitalize flex max-h-48 overflow-hidden flex-wrap justify-center items-center text-white transition-all w-full' : 'md:hidden capitalize flex max-h-0 overflow-hidden flex-wrap justify-center items-center text-white transition-all w-full'}>
                    <div className = 'mx-2 w-full my-2 p-1'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>features</a>
                    </div>

                    <div className = 'mx-2 w-full my-2 p-1'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>customers</a>
                    </div>

                    <div className = 'mx-2 w-full my-2 p-1'>
                        <a href = "#" className = 'p-3 px-5 hover:text-blue-400 transition-all'>integrations</a>
                    </div>

                    <div className = 'mx-2 w-full my-2 p-1'>
                        <a href = "#" className = 'p-3 px-5 hover:text-red-600 text-red-500 transition-all'>log out</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;