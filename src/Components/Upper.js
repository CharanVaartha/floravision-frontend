import "./Upper.css";
import indoorPlant from "./images/indoor-plant.png";
import firstPlant from "./images/firstplant.png";
import mainplant2 from "./images/mainplant2.png";

function Upper({ onSelectProduct }) {
  // 🌿 Define the products you want to show details for
  const products = {
    aglaonema: {
      name: "Aglaonema Plant",
      image: firstPlant,
      description:
        "The Aglaonema, also known as Chinese Evergreen, is an easy-care indoor plant with stunning green leaves and air-purifying qualities.",
      price: "Rs. 499",
    },
    deskPlant1: {
      name: "Desk Decoration Plant",
      image: indoorPlant,
      description:
        "A beautiful indoor plant that enhances your workspace with freshness and positivity. Perfect for office desks and study tables.",
      price: "Rs. 599",
    },
    deskPlant2: {
      name: "Green Serenity Plant",
      image: mainplant2,
      description:
        "This calming green plant adds a touch of tranquility and natural elegance to any room.",
      price: "Rs. 399",
    },
  };

  return (
    <>
      {/* --- TOP HERO SECTION --- */}
      <div id="u1">
        <div id="u1-side">
          <h1>Earth’s Exhale</h1>
          <p>
            Earth’s exhale symbolizes the purity of the Earth’s natural
            environment and its essential role in sustaining life.
          </p>
          <button
            id="allbtn"
            onClick={() => onSelectProduct(products.aglaonema)}
          >
            Buy Now
          </button>
        </div>

        <div id="image">
          <div className="imup1">
          <img id="im1" src={firstPlant} alt="Aglaonema" />
          <p style={{fontSize:"13px"}}>Indoor Plant</p>
          <p style={{fontSize:"13px"}}>Aglaonema Plant</p>
          </div>
          <button
            id="allbtn"
            onClick={() => onSelectProduct(products.aglaonema)}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* --- TRENDY PLANTS SECTION --- */}
      <h2>Our Trendy Plants</h2>

      <div id="image">
        <div id="u1">
          <img id="im" src={indoorPlant} alt="Desk Plant" />
          <div>
            <h3>For Your Desks Decoration</h3>
            <h6>
              I recently added a desk decoration plant to my workspace, and it
              has made such a positive difference.
            </h6>
            <h4>{products.deskPlant1.price}</h4>
            <button
              id="allbtn"
              onClick={() => onSelectProduct(products.deskPlant1)}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div id="image">
        <div id="u1">
          <div>
            <h3>For Your Desk Decoration</h3>
            <h6>
              The greenery adds a touch of nature and serenity to my desk,
              making it feel more inviting and calming.
            </h6>
            <h4>{products.deskPlant2.price}</h4>
            <button
              id="allbtn"
              onClick={() => onSelectProduct(products.deskPlant2)}
            >
              Explore
            </button>
          </div>

          <img id="im" src={mainplant2} alt="Main Plant" />
        </div>
      </div>
    </>
  );
}

export default Upper;
