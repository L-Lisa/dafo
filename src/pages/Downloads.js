import React, { useState } from "react"
import styled from 'styled-components/macro'


export const Downloads = () => {
    const [visa, setVisa] = useState(false)

    return (
        <Wrapper>
            <h1>Interested in learning more about Dafos products and services?</h1>
            <button onClick={() => setVisa(true)} > Typ tryck här för att lämna mejl adress och få se download listan...</button>
            {visa &&
                <div>
                    <p>Lista på doc..</p>
                    <p>Lista på doc..</p>
                    <p>Lista på doc..</p>
                </div>
            }
        </Wrapper>
    )
}

const Wrapper = styled.main`
width: 100%;
height:100wh;
background:#1c1c1c;
background-color: #dcd8d8;
padding: 20px;
box-sizing: border-box;
div{
    background:#ffff;
    padding:40px;
}
`