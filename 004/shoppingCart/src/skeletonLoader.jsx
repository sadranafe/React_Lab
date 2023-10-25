const SkeletonLoader = () => {
    return (
        <>
            <div className = "m-1 bg-white p-5 text-center rounded-lg shadow-md shadow-gray-200">
                <div className = "cover-image-skeleton w-[200px] h-[100px] rounded-lg"></div>
                <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
                <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
                <div className = "skeleton-loader w-full h-[20px] rounded-lg my-3"></div>
            </div>
        </>
    );
};

export default SkeletonLoader;