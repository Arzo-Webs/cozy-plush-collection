import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Browse our products</h1>
      <p>Check our amazing selection!</p>
      <Outlet /> 
    </div>
  );
}
