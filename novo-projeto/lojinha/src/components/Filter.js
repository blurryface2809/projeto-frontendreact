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
  >div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
  }
  h1{
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 10px;
  }
  
`




export function Filter () {
    
    const [name, setName] = useState("")

    const onChangeName = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    const [minPrice, setMinPrice] = useState(Number)

    const [maxPrice, setMaxPrice] = useState(Number)


    return (
        <Container>
        <h1>Filters <img src={sun} alt="ícone de planetas girando em torno do sol" heigth="25px" width="25px"/></h1>
        <div>
            <div>
                <label>
                Busca por Nome:
                </label>
                <input type="text" value={name} onChange={onChangeName}/>
            </div>
            <div>
                <label>
                Preço Mínimo:
                </label>
                <input type="number" value={minPrice} onChange={(event)=>setMinPrice(event.target.value)}/>
            </div>
            <div>
                <label>
                Preço Máximo:
                </label>
                <input type="number" value={maxPrice} onChange={(event)=>setMaxPrice(event.target.value)}/> 
            </div>
            
        </div>
        </Container>
    )
}