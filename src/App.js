// import Decrement from "./components/Decrement";
// import Increment from "./components/Increment";
// import Input from "./components/Input";
// import Reset from "./components/Reset";
import Product from "./pages/Product";
// import TodoPage from "./pages/TodoPage";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
function App() {
  return (
    <div>
      {/* <div className="text-center d-flex justify-content-center pt-5">
        <Decrement />
        <Input />
        <Increment />
      </div>
      <div className="pt-4" >
        <Reset />
      </div> */}

      {/* <TodoPage /> */}
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
