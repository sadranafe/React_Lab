import { useEffect, useState } from 'react';
import axios from 'axios'
import Product from '../components/product';
import FilteredProducts from '../components/filteredProducts';

const Products = ({onGetData}) => {
    const [DUMMYDATA , setDUMMYDATA] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState('')
    const [filteredView , setFilteredView] = useState('all')
   
    const controller = new AbortController();

    useEffect( () =>{
        axios.get("https://dummyjson.com/products" , {signal : controller.signal})
        .then(response => setDUMMYDATA(response.data.products))
        .catch(err => {
            if(err.name === 'AbortError'){
                setError(err.message)
            }
        })
        .finally( setIsLoading(false) )
        onGetData(filteredProduct)
        
        return () => {
            controller.abort();
        }
    },[DUMMYDATA])

    const filteredProductsHandler = filteredData => {
        setFilteredView(filteredData)
    }

    const filteredProduct = DUMMYDATA.filter(item => {
        if(filteredView === 'all'){
            return item
        } else{
            return item.category === filteredView
        }
    })



    return (
        <>
            <div className = 'flex flex-wrap justify-center items-center content-center'>
                <div className = 'w-full flex flex-wrap justify-center items-center select-none my-3 mt-6'>
                    
                    <div className = 'w-8/12 flex flex-wrap justify-between items-center text-center'>

                        <p className = 'capitalize'>
                            <i className = 'bx bx-purchase-tag-alt translate-y-1.5 text-2xl mr-2'></i>
                            products
                        </p>

                        <FilteredProducts onFilterHandler = {filteredProductsHandler} selectedView = {filteredView}/>
                    </div>
                </div>

                {
                    isLoading ? 
                    <i className = 'bx bx-loader-alt bx-spin text-5xl mt-10'></i>
                    :
                    filteredProduct.map((item , index) =>
                        <Product key = {item.id} onFilterHandler = {filteredProductsHandler} id = {index + 1} title = {item.title} img = {item.images[0]} price = {item.price} category = {item.category}/>    
                    )
                }
            </div>

        </>
    );
};

export default Products;