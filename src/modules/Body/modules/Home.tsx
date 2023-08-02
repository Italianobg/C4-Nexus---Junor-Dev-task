import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

function Home({ }: Props) {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/kids', { replace: true });
    }, []);


    return (
        <div>Home</div>
    )
}

export default Home