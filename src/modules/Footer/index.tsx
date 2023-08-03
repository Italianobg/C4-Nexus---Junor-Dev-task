import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

type Props = {}

function Footer({ }: Props) {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h5>COMPANY</h5>

                    <LinkStyle to="history">History</LinkStyle>
                    <LinkStyle to="about">About Us</LinkStyle>
                    <LinkStyle to="contact">Contact Us</LinkStyle>

                </div>
                <div>
                    <h5>CUSTOMER SERVICE</h5>

                    <LinkStyle to="terms">Terms and Conditions</LinkStyle>
                    <LinkStyle to="privacy">Privacy Policy</LinkStyle>
                    <LinkStyle to="cookie">Cookie Policy</LinkStyle>
                </div>
                <div>
                    <h5>SOCIAL</h5>

                    <LinkStyle to="facebook">Facebook</LinkStyle>
                    <LinkStyle to="instagram">Instagram</LinkStyle>
                    <LinkStyle to="twittwe">Twitter</LinkStyle>

                </div>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #d6e0f0;
    padding: 10px 0px 18px 0px;

    font-size: 15px;
`

const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;

        div{
            margin: 15px 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

const LinkStyle = styled(Link)`
    text-decoration: none;
    font-size: 14px;
    display: block;
    color: #3f3f3f;
`

export default Footer