const SkeletonLoader = ({ length }) => {
    const loaderArr = Array.from({length  : length})

    return (
        <>
            {
                loaderArr.map( (item , index) => {
                    return(
                        <div key = {index} className = "m-1 bg-white p-5 my-5 mx-3 text-center rounded-lg shadow-md shadow-gray-200">
                            <div className = "cover-image-skeleton w-[200px] h-[147px] rounded-lg"></div>
                            <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
                            <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
                            <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default SkeletonLoader;