import React from 'react'
import { styled } from 'styled-components'

type Props = {
    setSort: Function;
    disabled: boolean;
}

function Sort({ setSort, disabled }: Props) {

    const [value, setValue] = React.useState<number>(1);

    const handleChange = (event: any) => {
        setValue(event.target.value);
        setSort(event.target.value);
    };

    return (
        <Wrapper>
            <label>
                <select value={value} onChange={handleChange} disabled={disabled}>
                    <option value="a-z">Alphabetical a-z</option>
                    <option value="z-a">Alphabetical z-a</option>
                    <option value="price-asc">Price ascending</option>
                    <option value="price-desc">Price descending</option>
                </select>
            </label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-size: 14px;
`

export default Sort