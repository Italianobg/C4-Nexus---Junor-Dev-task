import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Product } from '..'
import Checkbox from './Checkbox';
import { removeFromArray } from '../utils/global';
import { RangeSlider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { FaTimes } from 'react-icons/fa';

type Props = {
    products: Array<Product>,
    setDisplayProducts: Function,
    show: boolean;
    setShow: Function;
}

function Filter({ products, setDisplayProducts, show, setShow }: Props) {
    const [types, setTypes] = useState<Array<string>>([]);
    const [sizes, setSizes] = useState<Array<string>>([]);

    const [typesFiltered, setTypesFiltered] = useState<Array<string>>([]);
    const [sizesFiltered, setSizesFiltered] = useState<Array<string>>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(100);
    const [filteredProducts, setFilteredProucts] = useState(products);

    const typeFilterHander = (e: any): void => {
        if (e.target.checked) {
            let typeArr: Array<string> = [...typesFiltered, e.target.value];
            setTypesFiltered(typeArr);
        } else {
            let typeArr: Array<string> = removeFromArray(typesFiltered, e.target.value);
            setTypesFiltered([...typeArr]);
        }
    }

    const sizeFilterHander = (e: any): void => {
        if (e.target.checked) {
            let sizeArr: Array<string> = [...sizesFiltered, e.target.value];
            setSizesFiltered(sizeArr);
        } else {
            let sizeArr: Array<string> = removeFromArray(sizesFiltered, e.target.value);
            setSizesFiltered([...sizeArr]);
        }
    }

    function handleRanges(value: Array<number>) {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
    }

    useEffect(() => {
        let typesArr: Array<string> = [];
        let sizesArr: Array<string> = [];
        for (const product of products) {
            if (!typesArr.includes(product.attr1)) {
                typesArr.push(product.attr1)
            }
            if (!sizesArr.includes(product.attr1_values.toString())) {
                sizesArr.push(product.attr1_values.toString())
            }
        }

        setTypes(typesArr.sort((a, b) => a.localeCompare(b)));
        setSizes(sizesArr.sort((a, b) => +a - +b));
    }, [products])

    useEffect(() => {
        let filProducts;
        if (typesFiltered.length > 0) {
            filProducts = products.filter((elem) => {
                return typesFiltered.some((ele) => {
                    return ele === elem.attr1;
                });
            });
        } else {
            filProducts = products;
        }

        if (sizesFiltered.length > 0) {
            filProducts = filProducts.filter((elem) => {
                return sizesFiltered.some((ele) => {
                    return ele === elem.attr1_values.toString();
                });
            });
        }

        filProducts = filProducts.filter((elem) => elem.price >= minPrice);
        filProducts = filProducts.filter((elem) => elem.price <= maxPrice);

        setFilteredProucts(filProducts);
    }
        , [products, typesFiltered, sizesFiltered, minPrice, maxPrice])


    useEffect(() => {
        setDisplayProducts(filteredProducts);
    }, [filteredProducts])

    const closeFilter = () => {
        setShow(!show);
    }

    return (
        <Wrapper show={show}>
            <Header>
                <h3>Filters</h3>
                <CloseIcon onClick={closeFilter} />
            </Header>
            <h5>Type</h5>
            {types ? types.map((type) => { return <Checkbox label={type} key={type} value={typesFiltered.includes(type)} onChange={(e) => typeFilterHander(e)} ></Checkbox> }) : ''}
            <h5>Size</h5>
            {sizes ? sizes.map((size) => { return <Checkbox label={size} key={size} value={sizesFiltered.includes(size)} onChange={(e) => sizeFilterHander(e)} ></Checkbox> }) : ''}
            <h5>Price</h5>
            <PriceRange defaultValue={[0, 100]} onChange={handleRanges} />
            <MinMaxPrice>
                <p>{minPrice}</p>
                <p>{maxPrice}</p>
            </MinMaxPrice>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ show: boolean }>`
    width: 18%;
    p{
        font-size: 14px;
    }
    h5{
        margin: 8px 0px;

        @media screen and (max-width: 960px) {
            font-size: 22px;
        }
    }

    @media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		position: fixed;
		margin-top: 75px;
        padding-left: 10%;
        padding-right: 10%;
        padding-bottom: 25px;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #f0f0f0;

	}
    `

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CloseIcon = styled(FaTimes)`
    font-size: 28px;
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        }
`

const MinMaxPrice = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-size: 14px;

        @media screen and (max-width: 960px) {
            font-size: 18px;
        }
    }
`

const PriceRange = styled(RangeSlider)`
    z-index: 0;
    `

export default Filter