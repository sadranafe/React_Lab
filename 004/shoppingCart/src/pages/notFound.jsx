import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <>
            <div className = "bg-re d-400 h-screen flex flex-wrap justify-center items-center content-center">
                <p className = "text-xl">oops ....</p>
                <h1 className = "text-4xl w-full text-center">404 page</h1>
                
                <div className = "notFound_bg bg-[url('./404_vector.png')] w-full h-[200px] bg-no-repeat bg-center mt-5"></div>

                <Link to = '/' className = "flex flex-wrap justify-center items-center relative group hover:border-b-gray-400 border-b-2 border-b-transparent transition-all">
                    back to home
                    <i className = "bx bx-left-arrow-alt text-xl absolute -left-7 opacity-0 group-hover:opacity-100 transition-all"></i>
                </Link>
            </div>
        </>
    );
};

export default NotFound;