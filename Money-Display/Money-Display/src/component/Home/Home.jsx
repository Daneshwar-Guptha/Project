import { useSelector, useDispatch } from "react-redux";
import { addCartMoney, removeCartMoney } from "../../Redux/MoneyBalancerSlice";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const { cart, BalanceMoney, currencyDetails } = useSelector((state) => state.MoneyBalancer);

    const navigate = useNavigate();
    const chechCartButton = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
    const cartButtonLength = Object.values(cart).filter(qty => qty >= 1).length;


    const navigateToCart = () => {
        navigate("/Cart")
    }



    const flagURL = "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg";

    return (
        <>
            <div className="currency-container">
                {currencyDetails.map((eachItem) => {
                    const quantity = cart[eachItem.id] || 0;


                    return (
                        <div className="currency-item" key={eachItem.id}>
                            <img src={eachItem.image} alt={`currency-${eachItem.id}`} />
                            <p className="price">${eachItem.price}</p>
                            <p className="country">
                                <img src={flagURL} alt="India Flag" />
                                {eachItem.country}
                            </p>

                            {quantity === 0 ? (
                                <button onClick={() => dispatch(addCartMoney(eachItem))}>
                                    <span>+</span> Add
                                </button>
                            ) : (
                                <div className="counter">
                                    <button onClick={() => dispatch(removeCartMoney(eachItem))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => dispatch(addCartMoney(eachItem))}>+</button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {(chechCartButton > 0) ?
                (
                    <div className="cart-container">
                        <button onClick={navigateToCart} className="view-cart-btn">
                            <span className="cart-icon">🛒</span>
                            <span className="cart-text">View Cart</span>
                            <span className="cart-badge">{cartButtonLength}</span>
                            <span className="cart-arrow">{'>'}</span>
                        </button>
                    </div>
                ) : ""
            }
        </>
    );
};

export default Home;
