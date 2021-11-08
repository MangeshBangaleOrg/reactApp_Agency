import React from 'react'
import styled from 'styled-components'
import Map from "../img/map.png"
import Phone from "../img/phone.png"
import Send from "../img/send.png"
import Footer from './Footer'

const Container = styled.div`
height:90%;


`
const Wrapper = styled.div`
height:100%;
padding:20px;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width:480px){
    flex-direction:column;   
   }
`

const FormContainer = styled.div`
width:50%;

@media only screen and (max-width:480px){
    width:100%;  
   }
`
const Title = styled.h1`
margin:50px;
margin-top:0;
margin-left:0px;

@media only screen and (max-width:480px){
  margin-left:20px;
   margin-top:30px; 
   }
`
const Form = styled.form`
height: 250px;
display:flex;
align-items:center;
justify-content:center;

@media only screen and (max-width:480px){
    flex-direction:column; 
    }
`
const LeftForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-right:20px;


@media only screen and (max-width:480px){
    height:50%;
    margin-right:0;
    }

`
const RightForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;

@media only screen and (max-width:480px){
   margin:20px;
   }
`
const Input = styled.input`
width:200px;
padding:15px;

@media only screen and (max-width:480px){
    padding:5px;  
    margin:10px;
   }
`
const TextArea =  styled.textarea`
height:60%;
width:200px;
padding:20px;

@media only screen and (max-width:480px){
    padding:5px;
    margin-top:10px; 
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
    margin-top:15px; 
    padding:5px 10px;
   }
`

const AddressContainer = styled.div`
width:50%;
display:flex;
flex-direction:column;

@media only screen and (max-width:480px){
    width:100%;
   }

`
const AddressItem =styled.div`
display:flex;
margin-bottom:50px;

@media only screen and (max-width:480px){
    margin-bottom:10px; 
   }

`
const Icon = styled.img`
width:20px;
margin-right:20px;
margin-left:50px;

@media only screen and (max-width:480px){
    width:15px;
   }
`
const Text = styled.span`
font-size:20px;
margin-right:15px;

@media only screen and (max-width:480px){
    font-size:12px;
   }
`

const Contact = () => {

const HandleSubmit = (e) =>{
    e.preventDefault();
}

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions? <br/>
                        Let's get in touch.
                    </Title>
                    <Form onSubmit={HandleSubmit} >
                        <LeftForm>
                            <Input placeholder="Your name" />
                            <Input placeholder="Your email" />
                            <Input placeholder="Subject" />
                        </LeftForm>
                        <RightForm>
                        <TextArea placeholder="Your message" />
                        <Button >Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                <AddressItem>
                    <Icon src={Map} />
                    <Text>New mumbai, Maharashtra, India.</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone} />
                    <Text>+91 - 9876543210</Text>
                    <Text>+91 - 9876543210</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send} />
                    <Text>contact@gmail.com</Text>
                    <Text>contact@gmail.com</Text>
                </AddressItem>
                
                </AddressContainer>
            </Wrapper>
            
        </Container>
    )
}

export default Contact
