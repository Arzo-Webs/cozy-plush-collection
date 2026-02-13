import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductsList from "./pages/ProductsList"
import ProductsDetails from "./pages/ProductsDetails"
import NotFound from "./pages/NotFound"
import About from "./pages/about"
import "./App.css";
export default function App(){
  return(
    <div>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductsList />} />
          <Route path=":id" element={<ProductsDetails />} />

        </Route>
        <Route path="/about" element={<About />} />
<Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        

      </Routes>
    </div>
  )
}
