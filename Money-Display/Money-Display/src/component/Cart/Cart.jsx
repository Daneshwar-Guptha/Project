import { useSelector } from "react-redux";

const Cart = () => {
  const { cart,currencyDetails} = useSelector((state) => state.MoneyBalancer);
  

  return (
    <div>
      {Object.entries(cart).map(([id, quantity]) => (
        <h1 key={id}>
          Item {id} : {quantity}
        </h1>
      ))}
    </div>
  );
};

export default Cart;
