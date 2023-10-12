import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import MainSlider from '../MainSlider/MainSlider'
import { useQuery } from 'react-query'
import { Helmet } from 'react-helmet'
import SubSlider from '../subSlider/subSlider'

function Home() {

    // let [products, setProducts] = useState([])


    // useEffect(() => {
    //     getAllProducts()
    // }, [])

    // async function getAllProducts() {
    //     let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
    //     console.log(data.data);
    //     setProducts(data.data)
    // }


    function getAllProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }

    let { data, isError, isFetched, isFetching, isLoading, refetch } = useQuery('products', getAllProducts, {
        cacheTime: 5000,
        refetchInterval:50000,
        enabled: true
    })

    console.log(isFetching);

    


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <MainSlider />
            <SubSlider/>
            <button onClick={refetch} className='btn bg-main text-white w-100 text-center'>Get All Products</button>
            <div className="row">
                {data?.data.data.map((product) => {
                    return <div key={product._id} className={"col-md-3"}>
                        <Product product={product} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Home