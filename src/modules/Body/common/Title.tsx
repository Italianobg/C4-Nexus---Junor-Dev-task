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
    flex-grow: 1;
    `
const Category = styled.div`
    font-size: 28px;
`
export default Title