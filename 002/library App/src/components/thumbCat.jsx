import { Link } from "react-router-dom";

const ThumbCat = ({ img , title , e_title }) => {
    
    return (
        <>
            <Link to = {`/books?category=${e_title}`} className = 'w-[240px] h-80 relative m-2 rounded-3xl overflow-hidden group transition-all'>
                <img src = {img} alt = "category" className = 'w-full h-full'/>
                <div className = "w-full h-full absolute bg-neutral-800 bg-opacity-40 top-0 transition-all group-hover:bg-opacity-70">
                    <p className = "opacity-100 delay-75 text-2xl text-white bottom-5 absolute left-10">{title}</p>
                </div>
            </Link>   
        </>
    );
};

export default ThumbCat;