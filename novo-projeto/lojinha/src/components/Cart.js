import styled from "styled-components"

const Container = styled.div`
  width: 20%;
  height: 100%;
  border: 2px solid green;
  display: flex;
`

export function Cart () {
    return (
        <Container>
        <h1>Cart</h1>
        </Container>
    )
}