import LoginBtn from './loginBtn';

const LoginPage = () => {
    return (
        <>
            <form action = "#">
                <div className = 'text-center border p-10 border-neutral-500 rounded-2xl'>
                    <h1 className = 'text-2xl text-center mb-4'>Login</h1>

                    <div className = 'm-2'>
                        <input type = "email" placeholder = 'your email' className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none' />
                    </div>

                    <div className = 'm-2'>
                        <input type = "password" placeholder = 'your password' className = 'bg-slate-200 p-2 px-3 rounded-lg outline-none' />
                    </div>

                    <LoginBtn/>
                </div>
            </form>
        </>
    );
};

export default LoginPage;