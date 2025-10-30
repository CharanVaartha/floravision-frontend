import "./ProductDetails.css";
import image1 from "./images/image1.png";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.png";
function ProductDetails({ product }) {
  return (
    <>
    <div className="ProductDetails">
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={{ width: "200px", borderRadius: "10px" }} />
          <p>{product.description}</p>
          <h4>Price: {product.price}</h4>
        </div>
      ) : (
        <p>Select a plant to view its details 🌿</p>
      )}
       </div>
       <h2>customer Reviews:</h2>
      <div className="reviews">
  <div className="review-card">
    <img id="im-review" src={image1} alt="Shelly Russel" />
    <h5>Shelly Russel</h5>
    <div className="stars">★★★★★</div>
    <p>Just got my hands on some absolutely awesome plants!</p>
  </div>

  <div className="review-card">
    <img id="im-review" src={image2} alt="Lula Rolfosan" />
    <h5>Lula Rolfosan</h5>
    <div className="stars">★★★★☆</div>
    <p>Each one has its own unique charm and personality...</p>
  </div>

  <div className="review-card">
    <img id="im-review" src={image3} alt="Carol Hules" />
    <h5>Carol Hules</h5>
    <div className="stars">★★★★★</div>
    <p>It's like bringing a little piece of nature indoors...</p>
  </div>
</div>

      </>
   
  );
}

export default ProductDetails;
