import styled from "styled-components"
import cartIcon from "../Assets/shopping-cart.png"

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #f3c4fb;
  border-left: 5px solid #ffffff;
  h1{
    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 10px;
  }
  
`

export function Cart () {
    return (
        <Container>
        <h1>Cart <img src={cartIcon} alt="ícone de carrinho de compras" heigth="25px" width="25px"/></h1>
        
        </Container>
    )
}