import './Navbar.css'

import { useSelector } from 'react-redux'
const Navbar = ()=>{
  const MoneyBalance = useSelector((store) => store.MoneyBalancer.BalanceMoney); 
  

    return(
       <div className="navbar">
         <h3>MoneyConverter</h3>
         <div>
          <h1>{MoneyBalance}</h1>
         </div>
       </div>
    )
}
export default Navbar