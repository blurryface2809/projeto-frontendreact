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
  return (
    <>
    <Header/>
    <Container>
      <Filter/>
      <section>
        <div>
        {products.map((product)=>{
          return (
          <div key={product.id}>
            <CardBox  product={product}/>
          </div>)
        })}
        </div>
      </section>
      <Cart/>
      <GlobalStyle/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
