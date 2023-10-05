import LoginBtn from './loginBtn';

const RegisterPage = () => {
    return (
        <>
            <form action = "#">
                <div className = 'text-center border border-neutral-500 rounded-2xl p-10'>
                    <h1 className = 'text-2xl text-center mb-4'>Register</h1>
                    
                    <div className = 'm-2'>
                        <input type = "email" placeholder = 'your email' className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none' />
                    </div>

                    <div className = 'm-2'>
                        <input type = "password" placeholder = 'your password' className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none' />
                    </div>

                    <div className = 'm-2'>
                        <input type = "checkbox" name = 'checkbox' id = 'checkbox' className = 'mr-2 cursor-pointer'/>
                        <label htmlFor = "checkbox" className = 'cursor-pointer select-none'>agree with the terms</label>
                    </div>
                    
                    <LoginBtn/>
                </div>

            </form>
        </>
    );
};

export default RegisterPage;