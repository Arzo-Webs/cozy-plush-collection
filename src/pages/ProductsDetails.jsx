import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/productsData";
import NotFound from "./NotFound";
export default function ProductsDetails(){
    const {id}=useParams();
    const navigate = useNavigate();
    const product=products.find(p=>p.id===parseInt(id));
    if (!product) {
    return (
      <div>
       <h2>Product Not Found</h2>
      <p>The product you are looking for does not exist.</p> 
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

    return(
        <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <button onClick={() => navigate("/products")}>Back to Products</button>
        </div>
    )
}