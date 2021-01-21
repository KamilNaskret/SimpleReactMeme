import React from 'react'
import {Form} from './Form'
import styled from 'styled-components'

const MainWrap = styled.main`
    min-height:40vh;
    padding:40px;
`;

const Main = () => {
    return(
        <MainWrap>
            <Form/>
        </MainWrap>
    )
}
export{Main}