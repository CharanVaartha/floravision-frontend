import SecondPlant from "./images/indoor-plant.png";
import FirstPlant from "./images/firstplant.png";
import ThirdPlant from "./images/third.png";
import fourthPlant from "./images/top4.png";
import fifth from "./images/fifth.png";
import sixth from "./images/sixth.png";
import "./Lower.css";

function Lower({ onSelectProduct }) {
  const products = [
    {
      id: 1,
      name: "Aglonema plants",
      image: FirstPlant,
      description:
        "The Aglonema, or Chinese Evergreen, is known for its beautiful foliage and easy care.",
      price: "Rs. 300",
    },
    {
      id: 2,
      name: "Plantain Lilies",
      image: SecondPlant,
      description:
        "Hostas are grown for their lush, decorative leaves, available in various colors and patterns.",
      price: "Rs. 380",
    },
    {
      id: 3,
      name: "Cactus",
      image: ThirdPlant,
      description: "Known for thriving in dry climates with minimal care.",
      price: "Rs. 259",
    },
    {
      id: 4,
      name: "Swiss Cheese Plant",
      image: fourthPlant,
      description: "Popular tropical houseplant with unique perforated leaves.",
      price: "Rs. 400",
    },
    {
      id: 5,
      name: "Sansevieria Plant",
      image: fifth,
      description: "Stylish and low-maintenance indoor plant.",
      price: "Rs. 450",
    },
    {
      id: 6,
      name: "Agave Plant",
      image: sixth,
      description: "Succulent known for its thick, fleshy leaves and striking shape.",
      price: "Rs. 359",
    },
  ];

  return (
    <>
    
      <h3>Our Top Selling Plants</h3>
      <div className="Lowerimg">
        {products.map((p) => (
          <div key={p.id} className="plant-item" id="image">
            <img src={p.image} alt={p.name} />
            <h5>{p.name}</h5>
            <p>{p.description}</p>
            <h4>{p.price}</h4>
            <button id="allbtn" onClick={() => onSelectProduct(p)}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Lower;
