import React from 'react'
import styled from 'styled-components'

type Props = {}

function NotFound({ }: Props) {
    return (
        <Wrapper>
            Ooops... The page is not available!
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`
export default NotFound