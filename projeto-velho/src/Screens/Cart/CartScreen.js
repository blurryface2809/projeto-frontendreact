import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utilities/priceFormatter"
import { Main } from "./CartScreen.styled"

function CartScreen(props) {
    const {
        cart,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props

    const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc,
        0
    )

    return (
        <Main>
            <section>
                <h1>Cart | total = {priceFormatter.format(total)}</h1>
                <hr />
                {cart.map((product) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                            isOnCartScreen={true}
                            increaseQuantityInCart={increaseQuantityInCart}
                            decreaseQuantityInCart={decreaseQuantityInCart}
                            deleteFromCart={deleteFromCart}
                        />
                ))}
            </section>
        </Main>
    )
}

export default CartScreen