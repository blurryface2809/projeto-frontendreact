import { Cart } from "./components/Cart";
import { Filter } from "./components/Filter";
import { CardBox } from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";
import products from "../src/Products/products.json";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { useEffect, useState } from "react";


const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`
const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
section{
  width: 60%;
  height: 100%;
  overflow-y: auto;
  background-color: #fde2e4;
  padding: 20px 0;
  /* border:2px solid blue; */
  display:flex;
  justify-content: center;
  >div{
    display: flex;
    width: 85%;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    /* border: 2px solid black; */
  }
}
section::-webkit-scrollbar {
  width: 20px;               
}

section::-webkit-scrollbar-track {
  background: #a0ced9;        
}

section::-webkit-scrollbar-thumb {
  background-color: #ffd97d;    
  border: 2px solid #a0ced9;  
}
`

function App() {
  
  const [name, setName] = useState("")

  const [minPrice, setMinPrice] = useState("1")

  const [maxPrice, setMaxPrice] = useState("1000")

  const [sortByPrice, setSortByPrice] = useState("")


  const itensCart = JSON.parse(localStorage.getItem("itensCart"))


  const [cart, setCart] = useState([...itensCart])
  
  useEffect(()=>{
    localStorage.setItem("itensCart", JSON.stringify(cart))
},[cart])


  return (
    <>
    <Header/>
    <Container>
      <Filter
      name={name}
      setName={setName}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      minPrice={minPrice}
      setMinPrice={setMinPrice}
      sortByPrice={sortByPrice}
      setSortByPrice={setSortByPrice}
      />
      <section>
        <div>
        {products
        .filter((product)=>{
          console.log(product.name.includes(name))
          return product.name.includes(name.toUpperCase())
        })
        .filter((product)=>{
          return product.price >= minPrice
        })
        .filter((product)=>{
          return product.price <= maxPrice
        })
        .sort((a,b)=>{
          if(sortByPrice==="crescente"){
            return a.price>b.price?1:-1
          }else if(sortByPrice==="decrescente"){
            return a.price<b.price?1:-1
          }
        })
        .map((product)=>{
          return (
          <div key={product.id}>
            <CardBox  
            product={product}
            cart={cart}
            setCart={setCart}/>
          </div>)
        })}
        </div>
      </section>
      <Cart
      cart={cart}
      setCart={setCart}/>
      <GlobalStyle/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
