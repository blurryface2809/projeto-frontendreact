import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fcf6bd;
border-bottom: 4px solid #f7edf0;
h1{
font-size: 2em;
color: #8093f1;
}

`

export function Header () {
    return (
        <Container>
        <h1>Meu Futuro Astronauta</h1>
        <h2>TELEFONE: (22)2222-2222</h2>
        </Container>
    )
}