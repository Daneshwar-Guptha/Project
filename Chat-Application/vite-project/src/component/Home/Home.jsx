import { useContext } from "react";
import { CreateContext } from "../UseContext/CreateContext";

const Home = ()=>{
    const{name,email} = useContext(CreateContext)
    return(
       <>
        <h1>{name}</h1>
        <h1>{email}</h1>
       </>
    )

}

export default Home;