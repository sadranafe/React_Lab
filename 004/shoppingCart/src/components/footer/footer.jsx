import NavLogo from "../nav/acmLogo";
import { Link , useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const searchedResult = location.pathname.split('/')[1]

    return (
        <>
            <div className = {searchedResult === 'cart' || searchedResult === 'login' ? 'hidden' : 'bg-neutral-100 text-black w-full p-5 flex flex-wrap justify-between items-center'}>
                <div className = "w-1/12 flex items-center justify-start">
                    <Link to = '/' className = "flex items-center">
                        <NavLogo />
                        <span className = "uppercase font-extrabold">acme</span>
                    </Link>
                </div>

                <div className = "text-gray-400 opacity-50 ml-24 hidden sm:block">
                    <p className = "text-xs">@powered by moahammad sadra nafe</p>
                </div>

                <div className = "max-[390px]:hidden">
                    <a href = "https://github.com/sadranafe" className = "p-2 m-2 hover:text-blue-400 transition-all">
                        <i className = "bx bxl-github text-xl"></i>
                    </a>

                    <a href = "#" className = "p-2 m-2 hover:text-blue-400 transition-all">
                        <i className="bx bxl-telegram text-xl"></i>
                    </a>

                    <a href = "https://www.instagram.com/sadra_nafe" className = "p-2 m-2 hover:text-blue-400 transition-all">
                        <i className = "bx bxl-instagram text-xl"></i>
                    </a>

                    <a href = "mailto:sadranafe7@gmail.com" className = "p-2 m-2 hover:text-blue-400 transition-all">
                        <i className = "bx bx-envelope text-xl"></i>
                    </a>

                </div>
            </div>
        </>
    );
};

export default Footer;