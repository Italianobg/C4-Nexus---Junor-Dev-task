import React from 'react'
import { styled } from 'styled-components'

type Props = {
    label: string | number,
    value: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
}

function Checkbox({ label, value, onChange }: Props) {
    return (
        <Wrapper>
            <input type="checkbox" value={label} checked={value} onChange={onChange} />
            {label}
        </Wrapper>
    )
}

const Wrapper = styled.label`
    font-size: 14px;
    margin: 2px 0px;
    padding-left: 7px;
    display: flex;

    @media screen and (max-width: 960px) {
            font-size: 18px;
        }

    input{
        margin-right: 5px;
    }
`

export default Checkbox