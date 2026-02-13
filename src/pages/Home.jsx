import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Cozy Plush Boutique 🧸</h1>
        <p>
          Discover adorable handmade and fluffy stuffed animals made to bring
          comfort and joy.
        </p>

        <button onClick={() => navigate("/products")}>
          See Products
        </button>
      </div>
    </div>
  );
}
