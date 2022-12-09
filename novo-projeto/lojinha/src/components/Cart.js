import styled from "styled-components";
import cartIcon from "../Assets/shopping-cart.png";
import { Button, ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #f3c4fb;
  border-left: 5px solid #ffffff;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  h1 {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    font-size: 1.2em;
  }
  div {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    justify-content: space-around;
    align-items: start;
    border: #ff96ab solid 1px;
    border-radius: 4px;
    padding: 4px;
    margin: 5px;
    background-color: white;
  }
`;

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export function Cart(props) {

  const deleteItem = (product) => {
    const novoCart = [...props.cart];

    const deletedItemArray = novoCart.filter((item) => {
      item.quantity=1
      return item.id !== product.id;
    });

    props.setCart(deletedItemArray);
  }
  
  const [totalCart, setTotalCart] = useState(0)

  useEffect(()=>{
    let soma = 0
    
    for (const item of props.cart) {
      soma += item.quantity*item.price
    }
      setTotalCart(soma)
    
  },[props.cart])

  return (
    <ChakraProvider>
      <Container>
        <h1>
          Cart{" "}
          <img
            src={cartIcon}
            alt="ícone de carrinho de compras"
            heigth="25px"
            width="25px"
          />
        </h1>
        {props.cart.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.quantity}x</p>
              <p>{item.name}</p>
              <Button onClick={()=>deleteItem(item)} colorScheme="pink" variant="solid" size="xs">
                X
              </Button>
            </div>
          );
        })}
        <Button colorScheme="teal" size="md">
          Finalizar Compra
        </Button>
        <h2>Total:{priceFormatter.format(totalCart)}</h2>
      </Container>
    </ChakraProvider>
  );
}
