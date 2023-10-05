import { Outlet , NavLink } from "react-router-dom";

const Login = () => {
    return (
        <>
            
            <div className = "w-full flex flex-wrap justify-center items-center content-center h-screen absolute top-0 -z-10">
               
                <div className = "p-3 w-full text-center">
                    <NavLink to = 'login' className = { ({isActive}) => isActive ?  'capitalize bg-neutral-700 p-4 rounded-l-lg text-white' : "capitalize bg-neutral-400 p-4 rounded-l-lg"}>login</NavLink>
                    <NavLink to = 'register' className = { ({isActive}) => isActive ?  'capitalize bg-neutral-700 p-4 rounded-r-lg text-white' : "capitalize bg-neutral-400 p-4 rounded-r-lg"}>register</NavLink>
                </div>

                <div className = "mt-10 h-72">
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default Login;