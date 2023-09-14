import { Link } from "react-router-dom";

const LibraryItem = ({title , imgSrc , author , id}) => {
    return (
        <>
            <Link to = {`/books/${id}`} className = 'm-2 bg-neutral-700 text-white w-[250px] rounded-2xl overflow-hidden'>
                <div className = 'h-80'>
                    <img src = {imgSrc} alt = {title} className = 'w-full h-full'/>
                </div>

                <div className = 'flex flex-wrap justify-around items-center p-3' dir ='rtl'>
                    <div>
                        <h1 className = 'text-xl'>{title}</h1>
                    </div>

                    <div className = 'w-full text-center'>
                        <p className = 'text-sm'>نویسنده : {author}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default LibraryItem;