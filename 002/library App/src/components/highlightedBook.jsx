import { Link } from "react-router-dom";

const HighlightedBook = ({author , title , imgSrc , publishedDate , language , genre}) => {
    return (
        <>
            <div className = "bg-neutral-700 text-white w-[750px] h-[530px] rounded-3xl flex flex-wrap justify-between items-center relative">
                <Link to = "/books" className = "text-2xl p-1 absolute top-2 right-[340px] text-white">
                    <i className = "bx bx-left-arrow-alt"></i>
                </Link>

                <div className = "w-6/12 rounded-l-3xl overflow-hidden h-full">
                    <img src = {imgSrc} alt = {title} className = "h-full w-full"/>
                </div>


                <div className = "w-6/12 h-full flex flex-wrap justify-center items-center content-evenly">
                    <div className = "w-full text-center">
                        <h1 className = "text-2xl">{title}</h1>
                    </div>

                    <div className = "">
                        <div className = "p-3 flex" dir = "rtl">
                            <p className = "w-20">نویسنده : </p>
                            <p>{author}</p>
                        </div>

                        <div className = "p-3 flex" dir = "rtl">
                            <p className = "w-20">ژانر : </p>
                            <p>{genre}</p>
                        </div>

                        <div className = "p-3 flex" dir = "rtl">
                            <p className = "w-20">زبان : </p>
                            <p>{language}</p>
                        </div>

                        <div className = "p-3 flex" dir = "rtl">
                            <p className = "w-20 ml-1">تاریخ انتشار : </p>
                            <p>{publishedDate}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HighlightedBook;