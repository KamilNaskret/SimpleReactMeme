import React from 'react'
import styled from 'styled-components'
import {Image} from './Image'

const FormWrap = styled.form`
    text-align:center;
`;
const Inputs = styled.input`
    padding:20px 45px;
    text-align:center;
`;

const Button = styled.input.attrs({type:'submit'})`
    padding:15px 45px;
    outline:none;
    background-color:darkviolet;
    color:white;
    font-size:20px;
    border:none;
    cursor:pointer;
    &:hover{
        border:2px solid black;
    }
`;


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            meme:null,
            randomNumber:null,
            top:"",
            bottom:""
        }
    }
    logSomething(event){
        event.preventDefault();
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(datas => {
            const {data:{memes}} = datas;
            this.setState({
                meme:memes
            })
            this.getRandomNumber();
        })
        .catch(error => {
            console.error("ERROR!",error);
        })
    }
    getRandomNumber(){
        this.setState({
            randomNumber:Math.floor(Math.random()*this.state.meme.length)
        })
        
    }

    changeDisplay(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        const {meme,randomNumber,top,bottom}=this.state
        return(
            <FormWrap name={this.state}>
                <Inputs type="text" name="top" placeholder="Top Text" onChange={this.changeDisplay.bind(this)}/>
                <Inputs type="text" name="bottom" placeholder="Bottom Text" onChange={this.changeDisplay.bind(this)}/>
                <Button type="submit" value="Gen" onClick={this.logSomething.bind(this)}/>
                {meme!==null?<Image titles={{top,bottom}}src={meme[randomNumber]}/>:null}
            </FormWrap>
        )
    }
}
export{Form}