import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="products-section">
      <div className="container">
        <h1 className="products-layout-heading">Our Plush Collection</h1>
        <p className="products-layout-description">
          Soft friends made for warm hugs and cozy moments.
        </p>

      
        <Outlet />
      </div>
    </div>
  );
}
