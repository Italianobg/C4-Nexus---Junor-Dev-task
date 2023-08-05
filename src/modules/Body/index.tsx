import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { styled } from 'styled-components'
import NotFound from './modules/NotFound'
import Kids from './modules/Kids'
import Holidays from './modules/Holidays'
import Occasions from './modules/Occasions'
import Others from './modules/Others'
import Home from './modules/Home'
import { IconContext } from 'react-icons'

type Props = {}

export interface Product {
    ID: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    attr1: string;
    attr1_values: number;
    rating: number;
    discount: number;
}

function Body({ }: Props) {

    const [products, setProducts] = useState<any>([]);

    useEffect(() => {

        fetch('products.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setProducts(myJson);
                console.log(myJson);

            });
    }, [])

    return (
        <Wrapper>
            <IconContext.Provider value={{ color: '#000000' }}>
                <Routes>
                    <Route path="*" element={<NotFound />} ></Route>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="kids" element={<Kids products={products} />} ></Route>
                    <Route path="holidays" element={<Holidays products={products} />} ></Route>
                    <Route path="occasions" element={<Occasions products={products} />} ></Route>
                    <Route path="others" element={<Others products={products} />} ></Route>
                </Routes>
            </IconContext.Provider>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
    width: 100%;
    max-width: 1024px;
    margin: 100px auto 0 auto;
    display: flex;
`


export default Body