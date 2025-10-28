import "./ProductDetails.css";

function ProductDetails({ product }) {
  return (
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
  );
}

export default ProductDetails;
