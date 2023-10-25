const CardInfoItem = ({ icon , title , description }) => {

    return (
        <div className = "w-3/12 flex flex-wrap justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-300/70 p-2 m-3 my-5 shadow-md shadow-gray-200/60 rounded-3xl">

            <div className = "w-3/12 h-full text-center">
                <i className = {`${icon} text-4xl text-blue-700`}></i>
            </div>

            <div className = "w-9/12">
                <h3 className = "text-lg uppercase">{title}</h3>
                <p className = "text-[13px] p-2 pt-1 text-gray-500 text-justify">{description}</p>
            </div>
        </div>
    );
};

export default CardInfoItem;