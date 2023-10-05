import { Link } from 'react-router-dom';

const HighLightedProduct = ( {title , description , price , rating , image} ) => {
    const rateArr = Array.from({length : rating.rate})

    return (
        <>
            <div className = 'bg-re d-600 shadow-lg shadow-gray-200 w-8/12 h-[500px] rounded-2xl overflow-hidden flex flex-wrap justify-between items-center'>
                
                <div className = 'h-full w-6/12'>
                    <img src = {image} alt = {title} className = 'h-full w-full' />    
                </div>

                <div className = 'h-full w-1/2 p-10 relative flex flex-wrap justify-center items-center content-center'>
                    
                    <Link to = '/products' className = 'absolute top-0 left-0'>
                        <i className = 'bx bx-left-arrow-alt text-3xl'></i>
                    </Link>
                    
                    <div className = 'w-full'>
                        <h1 className = 'text-xl'>{title}</h1>
                    </div>

                    <div className = 'flex flex-wrap justify-around w-full py-3 items-center'>
                        <div>
                            <p className = 'bg-orange-400 p-1 px-3 rounded-full'>$ {price}</p>
                        </div>

                        <div className = 'flex flex-wrap justify-center items-center bg-orange-400 p-1 px-3 rounded-full'>
                            <p>rate : {rating.rate}</p>
                            <div className = 'ml-2 translate-y-0.5'>
                                {
                                    rateArr.map( (item , index) =>
                                        <i key = {index} className = 'bx bx-star mx-0.5'></i>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p className = 'text-justify pt-3'>{description}</p>
                    </div>

                    <div className = 'w-full mt-10'>
                        <button className = 'p-2 px-3 hover:border-b-2 border-b-2 border-transparent hover:border-gray-300 transition-all rounded-full'>add to cart</button>
                    </div>
                </div>
            </div>           
        </>
    );
};

export default HighLightedProduct;