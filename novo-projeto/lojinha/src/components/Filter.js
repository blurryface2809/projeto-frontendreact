import styled from "styled-components"

const Container = styled.div`
  width: 20%;
  height: 100%;
  border: 2px solid red;
  display: flex;
`

export function Filter () {
    return (
        <Container>
        <h1>Filter</h1>
        </Container>
    )
}