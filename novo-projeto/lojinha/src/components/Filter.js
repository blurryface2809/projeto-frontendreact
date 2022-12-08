import { useState } from "react"
import styled from "styled-components"
import sun from "../Assets/sun.png"

const Container = styled.div`
width: 20%;
height: 100%;
display: flex;
background-color: #d0f4de;
border-right: 5px solid #ffffff;
flex-direction: column;
align-items: center;
padding: 20px;
gap: 20px;

input{
    height: 32px;
    margin: 10px 0;
    width: 100%;
    border: 1px solid #FF96AB;
    border-radius: 4px;
}

>div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}
h1{
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
    font-size: 1.2em;
}
.ordem{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: left;
    height: 30px;
    input{
        width: 15px;
        color: #FF96AB;
    }
}
`




export function Filter (props) {
    
    

    const onChangeName = (event) => {
        props.setName(event.target.value)
        console.log(event.target.value)
    }

    
    

    return (
        <Container>
        <h1>Filters <img src={sun} alt="ícone de planetas girando em torno do sol" heigth="25px" width="25px"/></h1>
        <div>
            <div>
                <label>
                Busca por Nome:
                </label>
                <input type="text" value={props.name} onChange={onChangeName}/>
            </div>
            <div>
                <label>
                Preço Mínimo:
                </label>
                <input type="text" value={props.minPrice} onChange={(event)=>props.setMinPrice(event.target.value)}/>
            </div>
            <div>
                <label>
                Preço Máximo:
                </label>
                <input type="text" value={props.maxPrice} onChange={(event)=>props.setMaxPrice(event.target.value)}/> 
            </div>
            <div>
                <label>
                Ordenar por preço:
                </label>
                {/* <select value={props.maxPrice} onChange={(event)=>props.setMaxPrice(event.target.value)}>
                    <option value={"crescente"}>
                        Crescente
                    </option>
                    <option value={"decrescente"}>
                        Decrescente
                    </option>
                </select> */}
                <div className="ordem">
                    <input name="radio" type="radio" id="crescente" value={props.sortByPrice} onChange={(event)=>props.setSortByPrice(event.target.id)}/>
                    <p>Crescente</p>
                </div>
                <div className="ordem">
                    <input name="radio" type="radio" id="decrescente" value={props.sortByPrice} onChange={(event)=>props.setSortByPrice(event.target.id)}/>
                    <p>Decrescente</p> 
                </div>
                    
            </div>
            
        </div>
        </Container>
    )
}