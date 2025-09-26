import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartMoney, removeCartMoney } from "../../redux/MoneyBalancerSlice";
import './Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.MoneyBalancer.cart);
    const currencyDetails = useSelector((state) => state.MoneyBalancer.currencyDetails);


    const cartItems = currencyDetails.filter(item => cart[item.id] > 0);
    const navigate = useNavigate();
    const navigateToHome= ()=>{
        navigate("/Home")

    }
    const totalBill = currencyDetails.reduce((total, item) => {
    return total + (cart[item.id] || 0) * item.price;
  }, 0);

    return (
        <>

        <div>
            <h1 onClick={navigateToHome}>Home</h1>
        </div>

            <div className="cart-container">
                <h2>Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={`Currency ${item.id}`} />
                            <div className="cart-item-details">
                                <div className="row">
                                    <span>Country:</span>
                                    <span>{item.country}</span>
                                </div>
                                <div className="row">
                                    <span>Price:</span>
                                    <span>${item.price}</span>
                                </div>
                                <div className="row">
                                    <span>Quantity:</span>
                                    <span>{cart[item.id]}</span>
                                </div>
                            </div>
                            <div className="cart-item-buttons">
                                <button
                                    onClick={() => dispatch(addCartMoney({ id: item.id, price: item.price }))}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => dispatch(removeCartMoney({ id: item.id, price: item.price }))}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right', fontWeight: 'bold' }}>
      Total Bill: ${totalBill}
    </div>
        </>

    );
};

export default Cart;
