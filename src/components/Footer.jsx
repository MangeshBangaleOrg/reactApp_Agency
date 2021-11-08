import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:10%;
background-color:#111;
color:lightgray;
`

const Wrapper = styled.div`
padding:20px;
display:flex;
justify-content:space-between;

@media only screen and (max-width:480px){
   padding-top:10px; 
   display:flex;
   flex-direction:column;
    align-items:center;
   }
`

const List = styled.ul`
list-style:none;
display:flex;
`

const ListItem = styled.li`
margin-right:20px;
cursor:pointer;

@media only screen and (max-width:480px){
    margin-right:10px;
    }
`

const CopyRight = styled.span`

@media only screen and (max-width:480px){
    font-size:15px;
    margin-top:10px;
   
    }`


const Footer = () => {


    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <CopyRight>Agency © {getCurrentYear()} </CopyRight>
            </Wrapper>
        </Container>
    )
}

export default Footer
