import React from 'react'
import styled from 'styled-components'


const Meme = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Images = styled.img`
    min-height:5vh;
    width:50%;
`;

const TopTitle = styled.h2`
    position:absolute;
    left:50%;
    top:5%;
    transform:translate(-50%,-50%);
    z-index:9999;
    color:black;
    text-transform:uppercase;
`;
const BottomTitle = styled.h2`
    position:absolute;
    left:50%;
    bottom:5%;
    transform:translate(-50%,-50%);
    z-index:9999;
    color:black;
    text-transform:uppercase;
`;

const Image = (props) => {
    const {src,titles:{top,bottom}}=props;
    const item = src?src.url:null;
    return(
        <Meme>
            <Images src={item}></Images>
            <TopTitle>{top}</TopTitle>
            <BottomTitle>{bottom}</BottomTitle>
        </Meme>
    )
}

export{Image}