import React, { useState } from 'react'
import styled from 'styled-components'
import How from "../img/how.png"
import MiniCard from './MiniCard'
import Play from "../img/play.png"


const Container = styled.div`
display:flex;
height:100%;
@media only screen and (max-width:480px){
   flex-direction:column;
 }
`
const Left = styled.div`
width:50%;
position:relative;
@media only screen and (max-width:480px){
    display:none;
  }

`

const Image = styled.img`
display: ${(props) => props.open && "none"};
width:100%;
transform: scaleX(-1);
margin-left:100px;
margin-top:10px;


`

const Video = styled.video`
display: ${(props) => !props.open && "none"};
height:200px;
position:absolute;
top:0;
bottom:0;
right:0;
margin:auto;
@media only screen and (max-width:480px){
    width:100%;
   }
`

const Right = styled.div`
width:50%;
@media only screen and (max-width:480px){
    width:100%;
    height:100%;
 }
`

const Wrapper = styled.div`
padding:50px;
display:flex;
flex-direction:column;

@media only screen and (max-width:480px){
   padding:30px;
  }
`

const Title = styled.h1`

`
const Descp = styled.p`
margin-top:20px;
color:#777;
font-size:20px;
`

const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`
const Button = styled.button`
width:180px;
padding:15px 5px;
border:none;
border-radius:10px;
color:white;
background-color:darkblue;
cursor:pointer;
letter-spacing:2px;
margin-top:20px;
display:flex;
align-items:center;


@media only screen and (max-width:480px){
    z-index:1;
    width:150px;
   }
`

const Icon = styled.img`
width:15px;
margin-right:10px;

`

const Middle = styled.div`
width:100vw;
height:100vh;
position: absolute;
top:0;
left:0;
background-color:rgb(0,0,0,0.5);
`

const Services = () => {

    const [open, setOpen] = useState(false)
    const smallScreen = window.screen.width <= 480 ? true : false
    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=ZCFkWDdmXG8&list=RDCMUCWOA1ZGywLbqmigxE4Qlvuw&start_radio=1&rv=ZCFkWDdmXG8&t=71" />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Descp>We provide digital experience services to startups and small businesses
                        to looking for a partner of their digital media, design &
                        developement, lead generation and communictions requirements. We work with you,
                        not for you. Although we have a great resources.
                    </Descp>
                    <CardContainer>
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </CardContainer>
                    <Button onClick={() => setOpen(!open)} ><Icon src={Play} />{ open ? "Close video" : "How it works" }</Button>

                </Wrapper>
            </Right>
            {
                smallScreen && open && (
                    <Middle>
                        <Video open={open} autoPlay loop controls
                            src="https://www.youtube.com/watch?v=ZCFkWDdmXG8&list=RDCMUCWOA1ZGywLbqmigxE4Qlvuw&start_radio=1&rv=ZCFkWDdmXG8&t=71" />
                    </Middle>
                )
            }
        </Container>
    )
}

export default Services
