import React from 'react';

const FilteredBooks = ({onFilteredBooks , selected}) => {
    const optionHandler = ev => {
        onFilteredBooks(ev.target.value)
    }

    return (
        <>
            <div dir = 'rtl'>
                <i className = "bx bx-filter-alt text-xl mr-3"> : </i>
                <select  name = "dropdown" id = "dropdown" onChange = {optionHandler} value = {selected} className = 'appearance-none text-center outline-none bg-transparent p-2 cursor-pointer'>
                    <option value = "all">همه</option>
                    <option value = "poem">شعر</option>
                    <option value = "romantic">عاشقانه</option>
                    <option value = "philosophy">فلسفه</option>
                    <option value = "historical">تاریخی</option>
                    <option value = "drama">درام</option>
                </select>
            </div>
        </>
    );
};

export default FilteredBooks;