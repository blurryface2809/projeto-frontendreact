import styled from "styled-components"

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #d0f4de;
  border-left: 4px solid #f7edf0;
`

export function Cart () {
    return (
        <Container>
        <h1>Cart</h1>
        </Container>
    )
}