import styled from "styled-components"

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background-color: #f3c4fb;
  border-right: 4px solid #f7edf0;
`

export function Filter () {
    return (
        <Container>
        <h1>Filter</h1>
        </Container>
    )
}