import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'

import Product from '../components/product';
import FilteredProducts from '../components/filteredProducts';
import SkeletonLoader from '../skeletonLoader';

const Products = () => {
    const [DUMMYDATA , setDUMMYDATA] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [filteredView , setFilteredView] = useState('all')
   
    const controller = new AbortController();

    const location = useLocation();
    const searchedQuery = location.search.split('=')[1]


    useEffect( () =>{
        axios.get("https://fakestoreapi.com/products" , {signal : controller.signal})
        .then(response => setDUMMYDATA(response.data))
        .catch(err => {
            if(err.name === 'AbortError'){
                throw new Error('there is sth wrong!')
            }
        })
        .finally(DUMMYDATA.length !== 0 ? setIsLoading(false) : setIsLoading(true))

        return () => {
            controller.abort();
        }
    },[DUMMYDATA.length])

    useEffect(() => {
        if(searchedQuery === undefined){
            setFilteredView('all')
        } else{
            if(searchedQuery === 'men'){
                setFilteredView("men's clothing")
            } else if (searchedQuery === 'women'){
                setFilteredView("women's clothing")
            } else{
                setFilteredView(searchedQuery)
            }
        }
    },[searchedQuery])

    const filteredProductsHandler = filteredData => {
        setFilteredView(filteredData)
    }

    const filteredProduct = DUMMYDATA.filter(item => {
        if(filteredView === 'all'){
            return item
        } else {
            return item.category === filteredView
        }
    })



    return (
        <>
            <div className = {DUMMYDATA.length === 0 ? 'flex flex-wrap h-[72vh] justify-center bg-neutral-50' : 'flex flex-wrap justify-center bg-neutral-50 pb-5'}>
                <div className = 'w-full flex flex-wrap justify-center select-none my-3 mt-6'>

                    <div className = 'w-8/12 flex flex-wrap justify-between text-center'>

                        <p className = 'capitalize'>
                            <i className = 'bx bx-purchase-tag-alt translate-y-1.5 text-2xl mr-2'></i>
                            products
                        </p>

                        <FilteredProducts onFilterHandler = {filteredProductsHandler} selectedView = {filteredView}/>
                    </div>
                </div>

                {
                    filteredProduct.map( item =>{
                        if(isLoading){
                            return <SkeletonLoader key = {item.id}/>
                        } else{
                            return <Product key = {item.id} onFilterHandler = {filteredProductsHandler} id = {item.id} title = {item.title} img = {item.image} price = {item.price} category = {item.category}/>    
                        }
                    }
                    )
                }
            </div>

        </>
    );
};

export default Products;