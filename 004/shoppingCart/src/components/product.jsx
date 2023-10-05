import { Link } from "react-router-dom";

const Product = ({id , title , price , category , img , onFilterHandler}) => {
    const selectedCategory = ev => {
        onFilterHandler(ev.target.textContent)
    }

    return (
        <>
            <div className = "bg-neutral-600 text-neutral-50 m-4 w-[250px] overflow-hidden rounded-2xl shadow-xl shadow-gray-300">
                
                <Link to = {`/products/${id}`} className = "w-full h-60">
                    <div className = "w-full h-60">
                        <img src = {img} alt = {title} className = "w-full h-full" />
                    </div>
                </Link>

                <div className = "flex flex-wrap justify-between items-center p-3">

                    <div className = "flex flex-wrap justify-between items-center w-full mb-3">
                        <button onClick = {selectedCategory} className = "p-1 px-2 rounded-full bg-orange-400">{category}</button>

                        <p>$ {price}</p>
                    </div>

                    <div>
                        <h1 className = {title.length >= 63 ? 'text-sm' : 'text-normal'}>{title}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;