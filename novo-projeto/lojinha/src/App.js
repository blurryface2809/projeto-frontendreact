import { Cart } from "./components/Cart";
import { Filter } from "./components/Filter";
import { CardBox } from "./components/Card";
import styled, { createGlobalStyle } from "styled-components";
import products from "../src/Products/products.json";
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";



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
  border: 2px solid black;
  display: flex;
section{
  border: 2px solid blue;
  width: 60%;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  background-color: black;
  padding: 20px 0;
}
`

function App() {
  return (
    <>
    <Header/>
    <Container>
      <Filter/>
      <section>
        {products.map((product)=>{
          return (
          <div key={product.id}>
            <CardBox  product={product}/>
          </div>)
        })}
      
      </section>
      <Cart/>
      <GlobalStyle/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
