import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import Notification from '../common/Notification'
import { FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { CartContext } from '../../provider/cart';

type Props = {}

function Header({ }: Props) {

    const [show, setShow] = useState(false);
    const { cart } = useContext(CartContext);


    const handleClick = () => {
        setShow(!show);
    };

    return (
        <Wrapper>
            <IconContext.Provider value={{ color: '#000000' }}>
                <Notification />
                <Container>
                    <Logo to="/"><img src="https://i0.wp.com/frichicfactory.com/wp-content/uploads/2021/01/cropped-frichicfactory_logo2_0121.png?w=1028&ssl=1" alt="Logo" /></Logo>
                    <RightNav>
                        <MobileIcon onClick={handleClick}>
                            {show ? <FaTimes /> : <CgMenuRight />}
                        </MobileIcon>
                        <Nav show={show}>
                            <Link to="kids" onClick={handleClick}>For Kids</Link>
                            <Link to="holidays" onClick={handleClick}>Holidays</Link>
                            <Link to="occasions" onClick={handleClick}>Occasions</Link>
                            <Link to="others" onClick={handleClick}>Others</Link>
                        </Nav>
                        <Cart>
                            <FiShoppingCart />
                            {cart.length > 0 ? <NumberItems>{cart.length}</NumberItems> : ''}
                        </Cart>
                    </RightNav>
                </Container>
            </IconContext.Provider>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    padding: 20px 0px 18px 0px;
    font-size: 15px;
    position: fixed;
    width: 100%;
    background-color: #ebf4f8;
    z-index: 999;
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        width: 90%;
    }
`

const Logo = styled(NavLink)`
    img{
        max-width: 230px;
        height: auto;
        }
`

const MobileIcon = styled.div`
    font-size: 28px;
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
    }
`

const Nav = styled.div<{ show: boolean }>`
    display: flex;
    align-items: baseline;

    @media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		position: fixed;
		margin-top: 75px;
        padding-left: 10%;
        padding-right: 25%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #f0f0f0;
	}
`
const RightNav = styled.div`
    display: flex;
`

const Cart = styled.div`
    font-size: 23px;
    padding: 5px 10px;
    position: relative;
`

const NumberItems = styled.div`
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    top: 0px;
    right: 0px;
    color: black;
    background-color: #d6e0f0;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const Link = styled(NavLink)`
    text-decoration: none;
    color: rgba(0,0,0,1);
    font-size: 18px;
    padding: 5px 10px;

    &:hover {
        background-color: #d6e0f0c1;
        border-radius: 5px;
        text-decoration: none;
        color: rgba(0,0,0,1);
    }

    &.active {
        color: rgba(0,0,0,1);
        font-size: 19px;
        background-color: #d6e0f0;
        border-radius: 5px;
        text-decoration: none;
  }
`


export default Header