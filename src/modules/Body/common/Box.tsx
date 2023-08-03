import React, { useContext } from 'react'
import { Product } from '..'
import { styled } from 'styled-components'
import FullStar from './FullStar'
import EmptyStar from './EmptyStar'
import { NotificationContext } from '../../../provider/notification'
import { CartContext } from '../../../provider/cart'

type Props = {
    value: Product,
}

const rating = (value: number) => {
    const stars = Array.from({ length: 5 }, (v, i) => <EmptyStar key={i} />);
    for (let i = 0; i < value; i++) {
        stars[i] = <FullStar key={i} />;
    }
    return stars;
}

function Box({ value }: Props) {

    const { text, setTextData } = useContext(NotificationContext);
    const { setIDsData } = useContext(CartContext);

    function addToCartHandler(value: Product): void {
        setTextData(`${value.name} added to cart!`);
        setIDsData(value.ID);
    }

    return (
        <Wrapper>
            <Name>{value.name}</Name>
            <Image><img src={value.image.split(",")[0]} alt="product image" /></Image>
            <Description>{value.description}</Description>
            <Price>{value.price.toFixed(2)} BGN</Price>
            <Rating>{rating(value.rating).map((el) => { return el })}</Rating>
            <AddToCart onClick={() => { addToCartHandler(value) }}>Add to cart</AddToCart>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 24%;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d6e0f0;
    border-radius: 5px;
    margin: 0.5%;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        align-self: center;
        width: 49%;
    }
    @media screen and (max-width: 600px) {
        align-self: center;
        width: 80%;
    }
`

const Name = styled.div`
    margin-top: 5px;
    margin-bottom: 2px;
    text-align: center;
`

const Image = styled.div`
    width: 100%;
    border: 1px solid #d6e0f0;
    display: flex;
    justify-items: center;
    img{
        width: 100%;
        max-height: 150px;
        object-fit: contain;
    }
`

const Description = styled.div`
    margin: 6px;
    font-size: 13px;
    text-align: center;
`

const Price = styled.div`
    margin: 6px;
    font-size: 16px;
    color: rgba(80,80,80,1);
`

const Rating = styled.div`
    display: flex;
    width: 40%;
`

const AddToCart = styled.button`
    font-size: 14px;
    padding: 4px 10px;
    background-color: #d6e0f0;
    border-radius: 4px;

    &:hover{
        background-color: #d2def3;
        color: black;
    }
`
export default Box