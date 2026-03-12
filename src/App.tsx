import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProductDetail from "./pages/ProductDetail"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/product/:id"
          element={<ProductDetail />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App

// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Navbar from "./components/Navbar"
// import Home from "./components/Home"
// import ProductDetail from "./pages/ProductDetail"
// import CartPage from "./pages/CartPage"
// import LoginPage from "./pages/LoginPage"
// import UserPage from "./pages/UserPage"

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/product/:id" element={<ProductDetail />} />

//         <Route path="/cart" element={<CartPage />} />

//         <Route path="/login" element={<LoginPage />} />

//         <Route path="/users" element={<UserPage />} />

//       </Routes>

//     </BrowserRouter>
//   )
// }

// export default App