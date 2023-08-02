import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import Notification from '../common/Notification'

type Props = {}

function Header({ }: Props) {
    return (
        <Wrapper>
            <Notification />
            <Container>
                <Logo><img src="https://i0.wp.com/frichicfactory.com/wp-content/uploads/2021/01/cropped-frichicfactory_logo2_0121.png?w=1028&ssl=1" alt="Logo" /></Logo>
                <Nav>
                    <Link to="kids">For Kids</Link>
                    <Link to="holidays">Holidays</Link>
                    <Link to="occasions">Occasions</Link>
                    <Link to="others">Others</Link>
                </Nav>
            </Container>
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
`

const Logo = styled.div`
    img{
        max-width: 230px;
        height: auto;
        }
`

const Nav = styled.div`

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