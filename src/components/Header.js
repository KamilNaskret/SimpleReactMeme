import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color:white;
    text-transform:capitalize;
    text-align:center;
    font-size:2rem;
`;
const HeaderWrap = styled.header`
    background-color:darkviolet;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Header = () => {
    return(
        <HeaderWrap>
            <Title>Meme generator</Title>
        </HeaderWrap>
    )
}
export{Header}