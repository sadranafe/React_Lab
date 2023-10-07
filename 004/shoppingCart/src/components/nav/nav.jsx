import { useState , useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLogo from "./acmLogo";
import CartContext from "../../contexts/cartContext";

const Nav = () => {
    const [menuIsOpen , setMenuIsOpen] = useState(false)
    const {cartData , setCartData} = useContext(CartContext)

    const menuHandler = () => {
        setMenuIsOpen(!menuIsOpen)    
    }
    
    return (
        <>
            <div className = 'flex flex-wrap justify-between items-center shadow-sm shadow-neutral-100 bg-neutral-50 p-4'>

                <div className = 'flex flex-wrap w-6/12 min-[930px]:flex-nowrap items-center justify-start md:w-2/12 min-[930px]:w-1/12'>
                    
                    <button onClick = {menuHandler} className = 'block md:hidden cursor-pointer mr-3 p-2 transition-all'>
                        <i className = { menuIsOpen ? 'w-6 h-0.5 my-2 rotate-45 -translate-y-0 transition-all block rounded-sm bg-black ' : "w-6 h-0.5 my-2 transition-all block rounded-sm bg-black"}></i>
                        <i className = { menuIsOpen ? 'w-6 h-0.5 my-2 -rotate-45 -translate-y-2.5 transition-all block rounded-sm bg-black' : "w-6 h-0.5 my-2 transition-all block rounded-sm bg-black"}></i>
                    </button>

                    <NavLogo />
                    <p className = 'uppercase text-black max-[929px]:text-sm font-semibold'>acme</p>
                </div>

                <div className = 'hidden capitalize md:flex md:flex-wrap justify-center items-center text-black max-[929px]:w-8/12 min-[930px]:w-10/12'>
                    <div className = 'mx-2'>
                        <NavLink to = "/" className = { ({isActive}) => isActive ? "after:bg-fuchsia-700 after:w-20 p-3 after:h-0.5 after:absolute relative after:bottom-0 after:right-0 px-5 transition-all" : 'p-3 after:w-0 after:h-0.5 after:bg-slate-200 after:absolute relative after:bottom-0 after:right-0 px-5 hover:text-fuchsia-400 transition-all'}>home</NavLink>
                    </div>

                    <div className = 'mx-2'>
                        <NavLink to = "/products" className = { ({isActive}) => isActive ? "after:bg-fuchsia-700 after:w-[100px] p-3 after:h-0.5 after:absolute relative after:bottom-0 after:right-0 px-5 transition-all" : 'p-3 after:w-0 after:h-0.5 after:bg-slate-200 after:absolute relative after:bottom-0 after:right-0 px-5 hover:text-fuchsia-400 transition-all'}>products</NavLink>
                    </div>

                    <div className = 'mx-2'>
                        <NavLink to = "/about-us" className = { ({isActive}) => isActive ? "after:bg-fuchsia-700 after:w-[105px] p-3 after:h-0.5 after:absolute relative after:bottom-0 after:right-0 px-5 transition-all" : 'p-3 after:w-0 after:h-0.5 after:bg-slate-200 after:absolute relative after:bottom-0 after:right-0 px-5 hover:text-fuchsia-400 transition-all'} >about us</NavLink>
                    </div>
                </div>


                <div className = 'capitalize min-[930px]:w-1/12 w-4/12 md:w-2/12 max-[929px]:text-sm flex flex-wrap justify-end items-center'>
                    <div className = "relative mr-4 mt-1">
                        <Link to = "/cart" className = 'transition-all px-1 text-2xl relative'>
                            <i className = "bx bx-cart"></i>
                        </Link>

                        <p className = "text-xs text-center rounded-full p-0 absolute -top-2 right-2.5">{cartData.length}</p>
                    </div>

                    <Link to = "/login" className = 'bg-fuchsia-600 hover:bg-black text-white transition-all p-2 rounded-xl'>login</Link>
                </div>

                <div className = {menuIsOpen ? 'md:hidden capitalize flex max-h-48 overflow-hidden flex-wrap justify-center items-center transition-all w-full' : 'md:hidden capitalize flex max-h-0 overflow-hidden flex-wrap justify-center items-center transition-all w-full'}>
                    <div className = 'mx-2 w-full my-2 p-1'>
                        <NavLink to = "/" className = { ({isActive}) => isActive ? "text-fuchsia-600 shadow-md p-2 px-3 rounded-xl transition-all" : 'p-2 px-3 rounded-xl transition-all'}>home</NavLink>
                    </div>

                    <div className = 'mx-2 w-full my-2 p-1'>
                        <NavLink to = "/books" className = { ({isActive}) => isActive ? "text-fuchsia-600 shadow-md p-2 px-3 rounded-xl transition-all" : 'p-2 px-3 rounded-xl transition-all'}>products</NavLink>
                    </div>

                    <div className = 'mx-2 w-full my-2 p-1'>
                        <NavLink to = "/about-us" className = { ({isActive}) => isActive ? "text-fuchsia-600 shadow-md p-2 px-3 rounded-xl transition-all" : 'p-2 px-3 rounded-xl transition-all'}>about us</NavLink>
                    </div>
                    
                    <div className = "pt-5 min-[390px]:hidden">
                        <a href = "https://github.com/sadranafe" className = "p-2 m-2  hover:text-rose-400 transition-all">
                            <i className = "bx bxl-github text-2xl"></i>
                        </a>

                        <a href = "#" className = "p-2 m-2  hover:text-rose-400 transition-all">
                            <i className = "bx bxl-telegram text-2xl"></i>
                        </a>

                        <a href = "https://www.instagram.com/sadra_nafe" className = "p-2 m-2  hover:text-rose-400 transition-all">
                            <i className = "bx bxl-instagram text-2xl"></i>
                        </a>

                        <a href = "mailto:sadranafe7@gmail.com" className = "p-2 m-2  hover:text-rose-400 transition-all">
                            <i className = "bx bx-envelope text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;