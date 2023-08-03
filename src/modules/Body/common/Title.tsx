import React from 'react'
import { styled } from 'styled-components'

type Props = {
    title: string,
    description: string,
}

function Title({ title, description }: Props) {
    return (
        <Wrapper>
            <Category>
                {title}
            </Category>
            {description}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    @media screen and (max-width: 960px) {
        margin-bottom: 10px;
        border-bottom: 1px solid #d6e0f0;
    }
    `
const Category = styled.div`
    font-size: 28px;
`
export default Title