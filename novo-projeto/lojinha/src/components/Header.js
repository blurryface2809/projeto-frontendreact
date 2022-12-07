import styled from "styled-components"
import astronaut from "../Assets/astronaut.png"

const Container = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #fcf6bd;
border-bottom: 5px solid #ffffff;
div{
    display: flex;
    justify-content: space-around;
    gap: 20px;
}
h1{
font-size: 2em;
background-image: linear-gradient(to right, #0088c2, #ff00c8);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`

export function Header () {
    return (
        <Container>
            <div>
                <img src={astronaut} alt="logo astronauta" heigth="25px" width="40px"></img>
                <h1>Meu Futuro Astronauta</h1>
            </div>
        <h2>TELEFONE: (22) 2222-2222</h2>
        </Container>
    )
}