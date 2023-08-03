import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NotificationContext } from '../../provider/notification';

type Props = {
}

function Notification({ }: Props) {
    const { text, setTextData } = useContext(NotificationContext);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (text.length > 0) {
            setDisplay(true);
            timer = setTimeout(() => { setDisplay(false); setTextData('') }, 5000)
        } else {
        }
        return () => clearTimeout(timer);
    }, [text])

    return (
        <div>
            {display ? <Wrapper>{text}</Wrapper> : ''}
        </div>
    )
}

const Wrapper = styled.div`
    background-color: #8ccca7;
    text-align: center;
    padding: 5px 10px;
    border-radius: 7px;
    z-index: 999;
    position: absolute;
    top: 15px;
    margin: 0 auto;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;

    @media screen and (max-width: 960px) {
            width: 80%;
            font-size: 18px;
        }
`

export default Notification