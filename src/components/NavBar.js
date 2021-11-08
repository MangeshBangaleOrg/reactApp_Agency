import React from 'react'
import styled from 'styled-components'
import Feature from './Feature'

const Container = styled.div`
height:50px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left = styled.div`
width:60%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Logo = styled.h1`
font-weight:bold;
text-decoration:underline crimson;
`

const Menu = styled.ul`
display:flex;
list-style:none;

@media only screen and (max-width:480px){
    display:none;
}

`
const MenuItem = styled.li`
    margin-right:30px;
    font-size:20px;
    font-weight:bold;
    color:gray;
`

const Button = styled.button`
border:2px solid white;
padding:8px 15px;
background-color:crimson;
color:white;
font-weight:bold;
border-radius:10px;
cursor:pointer;
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agency</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem  >features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                </Left>
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    )
}

export default NavBar
