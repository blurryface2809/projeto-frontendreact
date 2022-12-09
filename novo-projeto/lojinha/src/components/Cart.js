import styled from "styled-components"
import cartIcon from "../Assets/shopping-cart.png"
import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #f3c4fb;
  border-left: 5px solid #ffffff;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  h1{
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    font-size: 1.2em;
  }
  div{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    justify-content: space-around;
    align-items: start;
    border: #FF96AB solid 1px;
    border-radius: 4px;
    padding: 4px;
    margin: 5px;
    background-color:white;
  }
`

export function Cart (props) {



    return (
        <ChakraProvider>
        <Container>
        <h1>Cart <img src={cartIcon} alt="ícone de carrinho de compras" heigth="25px" width="25px"/></h1>
        {props.cart
        .map((item)=>{
          return(
          <div>
            <p>
              {item.quantity}x
            </p>
            <p>
              {item.name}
            </p>
            <Button colorScheme='pink' variant='solid' size='xs'>
              X
            </Button>
          </div>
          )
          
        })}
        </Container>
        </ChakraProvider>
    )
}