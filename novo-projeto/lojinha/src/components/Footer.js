import styled from "styled-components"
import github from "../Assets/github.png"
import linkedin from "../Assets/linkedin.png"

const Container = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fcf6bd;
border-top: 5px solid #ffffff;
h3{
    display:flex;
    justify-content: space-around;
    gap: 10px;
}
`

export function Footer () {
    return (
        <Container>
        <h3>Feito por Graziela Machado 
        <a  target="_blank" rel="noreferrer" href="https://github.com/blurryface2809"> <img src={github} alt="ícone do Github" height="20" width="20"/></a>
        <a  target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/grazimashado/"> <img src={linkedin} alt="ícone do Github" height="20" width="20"/></a>
        </h3>
        <p>Inspiração: <a target="_blank" rel="noreferrer" href="https://www.ninabrinquedoseducativos.com.br/">www.ninabrinquedoseducativos.com.br</a></p>
        </Container>
    )
}