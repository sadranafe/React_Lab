import React from 'react';

const AboutUsCart = ({ title , icon }) => {
    return (
        <>
            <div className = 'sm:w-3/12 p-2 m-3 w-7/12 flex flex-wrap justify-center items-center content-center'>
                <div className = 'w-full text-center'>
                    <i className = {`${icon} text-3xl rounded-xl p-2 px-3 shadow-lg shadow-gray-300`}></i>
                </div>

                <h3 className = 'text-lg font-semibold w-full text-center mt-5 mb-1' dir = 'ltr'>{title}</h3>

                <div>
                    <p className = 'text-center text-gray-400'>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUsCart;