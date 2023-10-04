import React from 'react';

const Login = () => {
    return (
        <>
            <form action = "#">
                <div className = 'm-2'>
                    <input type = "email" placeholder = 'your email' className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none'/>
                </div>

                <div className = 'm-2'>
                    <input type = "password" placeholder = 'your password'  className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none'/>
                </div>
            </form>   
        </>
    );
};

export default Login;