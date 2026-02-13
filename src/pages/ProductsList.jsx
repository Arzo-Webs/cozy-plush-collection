import { products } from "../data/productsData";
import { Link } from "react-router-dom";

export default function ProductsList() {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">${product.price}</p>
          <p>{product.category}</p>
          <Link className="button-link" to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
