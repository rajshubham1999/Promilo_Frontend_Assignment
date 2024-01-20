import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

function Productlist() {
    let api = `https://api.kalpav.com/api/v1/product/category/retail`;
    const [product, setProduct] = useState([]);
    const [result, setResult] = useState("");

    const fetchapi = () => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => setProduct(data.response))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchapi();
    }, [])
    return (
        <div>
            <div className='flex space-x-8 justify-between items-center py-2 px-2 '>
                <div className='flex space-x-4'>
                    <div className='h-[1px] w-[100px] py-1px'>
                        <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" />
                    </div>
                    <NavLink to="/Home">Home</NavLink>
                    <NavLink to="/About">About</NavLink>
                </div>

            </div>
            <div className='text-2xl my-8 font-bold text-center underline'>
                ProductList
            </div>
            <div className='flex justify-end px-11 mb-7'>
                <input placeholder='search' value={result} onChange={(e) => setResult(e.target.value)} className='border' />
            </div>

            <div className='mx-[20px] mb-[20px] flex space-x-8'>
                {product

                    .filter((prod) => {
                        if (result == "") {
                            return prod;
                        } else if (prod.productCategory.productCategoryName.toLowerCase().includes(result.toLowerCase())) {
                            return prod;
                        }
                    })
                    .map((prod, index) => {
                        return (
                            <div key={index} className='w-[170px] h-[170px] bg-cover round-xl m-4 md:h-[180px] md:w-[180px] hover:scale-110 duration-300' style={{
                                backgroundImage: `url(${prod.productCategory.productCategoryImage})`
                            }}>
                                <div className='text-xs md:text-xs bg-gray-900 bg-opacity-60 p-4 text-white'>{prod.productCategory.productCategoryName}</div>
                            </div>
                        )
                    })}




            </div>

        </div>
    )
}

export default Productlist