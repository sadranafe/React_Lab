
const ReviewItems = ({ img , name , position , description }) => {
    return (
        <div className = "select-none flex flex-wrap justify-center items-center px-10 h-full">
            <div>
                <img src = {img} alt = "test" />
            </div>

            <div className = "w-full">
                <h3 className = "text-xl capitalize">{name}</h3>
                <p className = "text-gray-400 pl-2 text-sm">{position}</p>
            </div>

            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ReviewItems;