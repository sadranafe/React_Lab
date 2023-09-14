import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className = 'flex flex-wrap justify-center items-center content-center h-[75vh]'>
                <h1 className = 'text-4xl capitalize'>404 | <span className = 'text-lg'>چیزی پیدا نشد</span></h1>
                
                <div className = "w-full text-center pt-5">
                    <Link to = "/" className = "flex flex-wrap justify-center items-center bg-slate-300 p-1 pr-3 rounded-3xl w-fit capitalize mx-auto hover:bg-blue-400 transition-all">
                        <i className = "bx bx-left-arrow-alt text-2xl"></i>
                        برگشت
                    </Link>    
                </div>
            </div>
        </>
    );
};

export default NotFound;