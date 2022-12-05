import { HeaderContainer } from "./Header.styled";
import cartIcon from "../../assets/shopping-cart.png";
import alien from "../../assets/alien.png";
import astronaut from "../../assets/astronaut.png";


function Header(props) {
    console.log(props)
  const {
    goToCartScreen,
    goToProductsScreen,
    itemsInCart,
    filterText,
    onChangeFilterText
} = props;

    return (
      <HeaderContainer>
      <a>

      </a>

      <div>
                <input
                    placeholder="Search"
                    value={filterText}
                    onChange={onChangeFilterText}  
                />
                <button>
                    <img src={astronaut} alt="astronaut" heigth="20px" width="20px"/>
                </button>
            </div>

            <div className="button-group">
                <button onClick={goToProductsScreen}>
                    <img src={alien} alt="alien" heigth="20px" width="20px"/>
                </button>

                <button onClick={goToCartScreen} className="cart-btn">
                    <img src={cartIcon} alt="Cart icon" heigth="20px" width="20px"/>
                    {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                    }
                </button>
            </div>
      </HeaderContainer>
    );
  }
  
  export default Header;