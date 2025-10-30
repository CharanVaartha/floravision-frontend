import { useRef, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";
import Upper from "./Components/Upper";
import Lower from "./Components/Lower";
import Footer from "./Components/Footer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState("home");
  const footerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth <= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When a product is selected → switch to Product view (only on mobile)
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    if (isMobile) setView("product");
  };

  // Handle Navbar clicks
  const handleNavigate = (section) => {
    if (section === "contact" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setView(section);
    }
  };

  return (
    <div className="Container">
      {/* HOME / INDOOR / OUTDOOR (only visible when not viewing product on mobile) */}
      {(!isMobile || view !== "product") && (
        <div className="Home">
          <Navbar onNavigate={handleNavigate} />

          <div className="hom1">
            {view === "home" && (
              <>
                <div className="upper">
                  <Upper onSelectProduct={handleSelectProduct} />
                </div>
                <div className="lower">
                  <Lower onSelectProduct={handleSelectProduct} />
                </div>
              </>
            )}

            {view === "indoor" && (
              <div className="upper">
                <Upper onSelectProduct={handleSelectProduct} />
              </div>
            )}

            {view === "outdoor" && (
              <div className="lower">
                <Lower onSelectProduct={handleSelectProduct} />
              </div>
            )}

            <div ref={footerRef}>
              <Footer onNavigate={handleNavigate} />
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT DETAILS (only visible when product is selected or always on desktop) */}
      {(!isMobile || view === "product") && (
        <div className="Product">
          <Navbar onNavigate={handleNavigate} />
          {selectedProduct ? (
            <>
              {isMobile && (
                <button
                  onClick={() => setView("home")}
                  style={{
                    background: "#4CAF50",
                    border: "none",
                    color: "white",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  ← Back to Home
                </button>
              )}
              <ProductDetails product={selectedProduct} />
            </>
          ) : (
            <p style={{ padding: "20px" }}>Select a plant to view details 🌿</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
