import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding:20px;
box-shadow: 10px 10px 34px -15px rgba(0,0,0,0.95);
-webkit-box-shadow: 10px 10px 34px -15px rgba(0,0,0,0.95);
-moz-box-shadow: 10px 10px 34px -15px rgba(0,0,0,0.95);
background-color:white;
border-radius:10px;
display:flex;
flex-direction:column;
align-items:center;
margin-right: 50px;


@media only screen and (max-width:480px){
   margin-right:0;
    padding:0px;
   margin-bottom:10px;
   flex-direction:row;
    width:90%;
   }
`
const PriceContainer = styled.div`
display:flex;
align-items:center;
`
const Price = styled.span`
font-weight:bold;
font-size:50px;

@media only screen and (max-width:480px){
    font-size:30px;
    }
`
const Type = styled.button`
padding:5px 10px;
margin:10px 0;
border:2px solid crimson;
outline:none;
border-radius:20px;
color:crimson;
background-color:white;
cursor:pointer;
letter-spacing:2px;

@media only screen and (max-width:480px){
    padding:5px 5px;

    }
`
const List = styled.ul`
list-style:none;
`
const ListItem = styled.li`
margin:30px 0;

@media only screen and (max-width:480px){
    margin:10px;
    }
`

const Button = styled.button`
border:none;
padding:10px 15px;
background-color:darkblue;
color:white;
font-weight:bold;
font-size:20px;
letter-spacing:2px;
border-radius: 10px;
cursor:pointer;

@media only screen and (max-width:480px){
    font-size:10px;
    margin-bottom:10px;
    margin-left:10px;
    }
`
const TopWrapper = styled.div`

@media only screen and (max-width:480px){
    margin-left:10px;
    }
`

const PriceCard = ({ price, plan }) => {
    return (
        <Container>
            <TopWrapper>
            <PriceContainer>
                $<Price>{price}</Price> /Month
            </PriceContainer>
            <Type> {plan} plan</Type>
            </TopWrapper>
            <List>
                <ListItem>200 hand-crafted templates</ListItem>
                <ListItem>Exclusive support</ListItem>
                <ListItem>50+ preBuild websites</ListItem>
                <ListItem>Premium plugins</ListItem>
                <Button>Join Now</Button>
            </List>
            

        </Container>
    )
}

export default PriceCard
