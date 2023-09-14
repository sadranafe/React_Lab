import { useEffect } from "react";
import { useParams , useHistory } from "react-router-dom";
import DUMMY_DATA from "../components/DUMMY_DATA";
import HighlightedBook from "../components/highlightedBook";

const BookDetail = () => {
    const history = useHistory()
    const { id } = useParams()
    const book = DUMMY_DATA[id - 1]

    if(DUMMY_DATA.length === 0 ){
        history.replace("/books")
    }

    const highlightedImgSrc = book.imgSrc = `/image/${id}.jpg`

    useEffect(() => {
        document.title = book.title
    },[])


    return (
        <>
            <div className = "w-full flex flex-wrap justify-center items-center h-screen">
                <HighlightedBook author = {book.author} title = {book.title} imgSrc = {highlightedImgSrc} publishedDate = {book.published_date} language = {book.language} genre = {book.genre}/>
            </div>
        </>
    );
};

export default BookDetail;