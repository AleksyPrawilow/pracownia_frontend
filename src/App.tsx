import { Route, Routes } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import { ShopAppBar } from "./components/ShopAppBar";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <>
      <ShopAppBar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
