const FilteredProducts = ({onFilterHandler , selectedView}) => {
    
    const optionHandler = ev => {
        onFilterHandler(ev.target.value)
    }

    return (
        <>
            <div>
                <select name = "dropdown" id = "dropdown" value = {selectedView} onChange = {optionHandler} className = 'appearance-none text-center outline-none bg-transparent p-2 cursor-pointer'>
                    <option value = "all">all</option>
                    <option value = "men's clothing">men</option>
                    <option value = "women's clothing">women</option>
                    <option value = "jewelery">jewelery</option>
                    <option value = "electronics">electronics</option>
                </select>
                :
                <i className = "bx bx-filter-alt text-xl"></i>
            </div>
        </>
    );
};

export default FilteredProducts;