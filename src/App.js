import { useRef, useState } from "react";
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import './App.css';
import Upper from './Components/Upper';
import Lower from './Components/Lower';
import Footer from './Components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [view, setView] = useState("home"); // Controls which section is shown
  const footerRef = useRef(null);

  // Handle Navbar Clicks
  const handleNavigate = (section) => {
    if (section === "contact" && footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      setView(section);
    }
  };

  return (
    <>
      <div className="Container">
        {/* LEFT SIDE (MAIN CONTENT) */}
        <div className="Home">
          <Navbar onNavigate={handleNavigate} />

          <div className="hom1">
            {/* Conditional Section Rendering */}
            {view === "home" && (
              <>
                <div className="upper">
                  <Upper onSelectProduct={setSelectedProduct} />
                </div>
                <div className="lower">
                  <Lower onSelectProduct={setSelectedProduct} />
                </div>
              </>
            )}

            {view === "indoor" && (
              <div className="upper">
                <Upper onSelectProduct={setSelectedProduct} />
              </div>
            )}

            {view === "outdoor" && (
              <div className="lower">
                <Lower onSelectProduct={setSelectedProduct} />
              </div>
            )}

            <div ref={footerRef}>
              <Footer onNavigate={handleNavigate} />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (PRODUCT DETAILS) */}
        <div className="Product">
          <Navbar onNavigate={handleNavigate} />
          {selectedProduct ? (
            <ProductDetails product={selectedProduct} />
          ) : (
            <p style={{ padding: "20px" }}>Select a plant to view details 🌿</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
