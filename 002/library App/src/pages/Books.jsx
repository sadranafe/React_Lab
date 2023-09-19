import { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import DUMMY_DATA from '../components/DUMMY_DATA';
import LibraryItem from '../components/LibraryItem';
import FilteredBooks from '../components/filteredBooks';
import queryString from 'query-string';

const Books = () => {
    const [filteredView , setFilteredView] = useState("all")

    const location = useLocation()
    const searchQuery = queryString.parse(location.search)

    useEffect(() => {
        document.title = "کتاب ها";

        if(Object.keys(searchQuery).length === 0){
            setFilteredView("all")
        } else {
            setFilteredView(searchQuery.category)
        }
    },[])
    
    const filteredBooksResult = DUMMY_DATA.filter( item => {
        if(filteredView === "all"){
            return item
        } else {
            return item.e_genre === filteredView
        }
    })

    const filteredBooksHandler = selectedData => {
        setFilteredView(selectedData)
    }

    return (
        <>
            <div className = 'flex flex-wrap justify-center items-center p-6 pb-10'>

                <div className = 'w-full flex flex-wrap justify-center items-center mb-3 select-none'>
                    
                    <div className = "w-8/12 flex flex-wrap justify-between items-center text-center">
                        <p className = "capitalize">
                            <i className = "bx bx-book-alt text-xl translate-y-1 mr-2"></i>
                            کتاب ها
                        </p>
                    </div>

                    <FilteredBooks onFilteredBooks = {filteredBooksHandler} selected = {filteredView}/>
                </div>

                {
                    filteredBooksResult.map(item => 
                        <LibraryItem key = {item.id} id = {item.id} title = {item.title} imgSrc = {item.imgSrc} author = {item.author}/>
                    )
                }
            </div>

        </>
    );
};

export default Books;