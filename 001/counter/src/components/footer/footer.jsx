import NavLogo from "../navBar/navLogo";

const Footer = () => {
    return (
        <>
          <div className = 'bg-slate-700 w-full border-t border-t-slate-800 p-5 flex flex-wrap justify-between items-center'>
                <div className = "w-1/12 flex items-center justify-start">
                    <a className = "flex items-center" href = "https://demo.templatemonster.com/fr/demo/82059.html?_ga=2.92738845.1812544455.1691157351-1114433526.1691157346&_gac=1.183634772.1691157442.CjwKCAjww7KmBhAyEiwA5-PUSqNT2b70ZOjJ9VkkMZrNIQLh8diTNGss4LDUTYkQB420YUClPkkhhhoC1U8QAvD_BwE&_gl=1*rzagks*_ga*MTExNDQzMzUyNi4xNjkxMTU3MzQ2*_ga_FTPYEGT5LY*MTY5MTE1NzM0Ni4xLjEuMTY5MTE1Nzc1Ny40MC4wLjA.">
                        <NavLogo/>
                        <span className = "uppercase text-white">acme</span>
                    </a>
                </div>

                <div className = "text-gray-400 opacity-50 ml-24">
                    <p className = "text-xs">@powered by moahammad sadra nafe</p>
                </div>
                
                <div>
                    <a href = "#" className = "p-2 m-2  hover:text-blue-300 text-white transition-all">
                        <i className = "bx bxl-github text-2xl"></i>
                    </a>

                    <a href = "#" className = "p-2 m-2  hover:text-blue-300 text-white transition-all">
                        <i className = "bx bxl-telegram text-2xl"></i>
                    </a>

                    <a href = "#" className = "p-2 m-2  hover:text-blue-300 text-white transition-all">
                        <i className = "bx bxl-instagram text-2xl"></i>
                    </a>

                    <a href = "mailto:sadranafe7@gmail.com" className = "p-2 m-2  hover:text-blue-300 text-white transition-all">
                        <i className = "bx bx-envelope text-2xl"></i>
                    </a>

                </div>
          </div>  
        </>
    );
};

export default Footer;