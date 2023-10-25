
const ReviewCart = ({ totalPrice }) => {
    const taxPercentage = 15;
    return (
        <>
            <div className = "w-4/12 bg-white rounded-2xl p-3 py-5 absolute -right-[270px] top-3">
                <h1 className = "text-xl capitalize py-2">order summery</h1>

                <div>
                    <div className = "flex flex-wrap justify-between items-center w-full my-2 p-2">
                        <p>subTotal</p>
                        <p>$ {totalPrice.toFixed(2)}</p>
                    </div>

                    <div className = "flex flex-wrap justify-between items-center w-full my-2 p-2">
                        <p>shipping</p>
                        <p>free</p>
                    </div>
                    
                    <div className = "flex flex-wrap justify-between items-center w-full my-2 p-2">
                        <p>estimated tax</p>
                        <p>{taxPercentage} %</p>
                    </div>

                    <div className = "w-full h-0.5 bg-gray-300"></div>

                    <div className = "flex flex-wrap justify-between items-center w-full my-2 p-2">
                        <p>estimated total</p>
                        <p>$ { (( (taxPercentage / 100) * totalPrice) + totalPrice).toFixed(2) }</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCart;