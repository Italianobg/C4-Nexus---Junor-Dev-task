import React, { useContext } from 'react'
import { Product } from '..'
import { styled, css } from 'styled-components'
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

    const { setTextData } = useContext(NotificationContext);
    const { cart, setCartData } = useContext(CartContext);

    function addToCartHandler(value: Product): void {
        setTextData(`${value.name} added to cart!`);
        setCartData([...cart, value.ID]);
    }

    return (
        <Wrapper>

            <Name>{value.name}</Name>
            <MiddleContainer>
                <Image><img src={value.image.split(",")[0]} alt="product image" /></Image>
                <Description>{value.description}</Description>
            </MiddleContainer>
            <BottomContainer>
                <Size>Size: {value.attr1_values}cm</Size>
                <Tag>
                    <Price>
                        <RegularPrice discount={value.discount}>{value.price.toFixed(2)} </RegularPrice>
                        {value.discount > 0 ? <DiscountedPrice>{(value.price - value.price * value.discount / 100).toFixed(2)}</DiscountedPrice> : ''}
                    </Price>
                    <Currency>BGN</Currency>
                </Tag>
                <Rating>{rating(value.rating).map((el) => { return el })}</Rating>
                <AddToCart onClick={() => { addToCartHandler(value) }}>Add to cart</AddToCart>
            </BottomContainer>
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
        width: 49%;
    }
    @media screen and (max-width: 600px) {
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
const MiddleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Description = styled.div`
    margin: 6px;
    font-size: 13px;
    text-align: center;
`
const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Size = styled.div`
    font-size: 12px;
`
const Tag = styled.div`
    display: flex;
    align-items: baseline;
    margin: 3px 0px;
`

const Price = styled.div`
    font-size: 16px;
    color: rgba(80,80,80,1);
    position: relative;
    display: flex;
`
const RegularPrice = styled(Price) <{ discount: number }>`
    text-decoration:none;
    margin: 2px;
    ${({ discount }) => discount > 0 ? { Strike } : ''};

`

const Strike = css`
    color: red;
    &:before {
      content: " ";
      display: block;
      width: 110%;
      border-top: 2px solid #cf0808;
      height: 12px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: rotate(-17deg);
    }
    `
const DiscountedPrice = styled(Price)`
    margin: 2px;
`

const Currency = styled.div`
    font-size: 13px;
`

const Rating = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
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