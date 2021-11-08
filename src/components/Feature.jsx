import React from 'react'
import styled from 'styled-components'
import Appimg from "../img/app.png"
import AnimatedShapes from './AnimatedShapes'


const Container = styled.div`
display:flex;
@media only screen and (max-width:480px){
    flex-direction:column;
    padding:20px 30px;
}
`
const Left = styled.div`
width:50%;
@media only screen and (max-width:480px){
   display:none;
}
`

const Image = styled.img`
width:80%;
`

const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
margin-right:20px;

@media only screen and (max-width:480px){
    width:100%;
    height:100%;
 }
`
const Title = styled.span`
font-size:70px;
@media only screen and (max-width:480px){
    font-size:50px;
 }
`
const SubTitle = styled.span`
font-size:24px;
font-style:italic;
color:#333;
margin-top:30px;
`
const Descp = styled.p`
font-size:20px;
color:#777;
margin-top:30px;

`
const Button = styled.button`
width:200px;
border:none;
background-color:darkblue;
padding:15px 20px;
border-radius:20px;
color:white;
letter-spacing:2px;
font-size:20px;
cursor:pointer;
margin-top:30px;
outline:none;
`


const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={Appimg} />
            </Left>
            <Right>
                <Title>
                    <b>good </b>design<br />
                    <b>good </b> business
                </Title>
                <SubTitle>
                    We know that good design means good business.
                </SubTitle>
                <Descp>
                    We helps our client succeed by creating brand identities, designs, experiences and print materials that
                    communicate clearly , achieve marketing goals, and look fantastics .
                </Descp>
                <Descp>
                    We care your business and gaurantee you to achieve marketing goals.
                </Descp>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
