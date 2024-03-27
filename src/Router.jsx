import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Shop } from "./pages/Shop";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Admin } from "./pages/Admin";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Cadastro />} />
                <Route path="/admin" element = {<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;