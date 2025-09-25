import { useSelector } from "react-redux";
import './Home.css';

const Home = () => {

    const UserDetails = useSelector((store) => store.Login);
    const currencyDetails = [
        { id: 1, image: "https://tse4.mm.bing.net/th/id/OIP.HazrcUbxDFtnxR6WyP7XpAHaDw?pid=Api&P=0&h=180", price: 10, country: "India" },
        { id: 2, image: "https://tse4.mm.bing.net/th/id/OIP.87zCK4GpTJCLTxaeSiZgkAHaDh?pid=Api&P=0&h=180", price: 20, country: "India" },
        { id: 3, image: "https://tse2.mm.bing.net/th/id/OIP.ThifMFFP44UyePA7dJL8rgHaDT?pid=Api&P=0&h=180", price: 50, country: "India" },
        { id: 4, image: "https://tse2.mm.bing.net/th/id/OIP.sALAq3uVvWYTPFT0NkWUWAHaDc?pid=Api&P=0&h=180", price: 100, country: "India" },
        { id: 5, image: "https://tse3.mm.bing.net/th/id/OIP.8Mi24fYOCZDSgV3CxejXzAHaFj?pid=Api&P=0&h=180", price: 500, country: "India" }
    ];

    const flagURL = "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"; // Indian flag

    return (
        <div className="currency-container">
            {currencyDetails.map(eachItem => (
                <div className="currency-item" key={eachItem.id}>
                    <img src={eachItem.image} alt={`currency-${eachItem.id}`} />
                    <p className="price">${eachItem.price}</p>
                    <p className="country">
                        <img src={flagURL} alt="India Flag" />
                        {eachItem.country}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Home;
