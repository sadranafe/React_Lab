
const LoginBtn = () => {
    return (
        <>
            <div className = 'p-2'>
                <button type = 'submit' className = 'capitalize w-full flex flex-wrap justify-center items-center group transition-all bg-neutral-600 text-white p-2 rounded-lg'>
                    login
                    <i className = "bx bx-right-arrow-alt text-xl opacity-0 group-hover:opacity-100 transition-all"></i>
                </button>
            </div>
        </>
    );
};

export default LoginBtn;