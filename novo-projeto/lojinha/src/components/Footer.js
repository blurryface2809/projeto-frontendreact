import styled from "styled-components"

const Container = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fcf6bd;
border-top: 4px solid #f7edf0;
`

export function Footer () {
    return (
        <Container>
        <h3>Feito por Graziela Machado (Github e linkedin)</h3>
        <p>Inpiração: www.ninabrinquedoseducativos.com.br</p>
        </Container>
    )
}