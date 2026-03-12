import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"

interface Product {
  id: number
  title: string
  price: number
  image: string
}

const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState("all")
  const [search, setSearch] = useState("")

  useEffect(() => {

    let url = "https://fakestoreapi.com/products"

    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [category])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4 md:p-8">

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Products
      </h1>

      <SearchBar setSearch={setSearch} />

      <CategoryFilter setCategory={setCategory} />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map(product => (

          <div
            key={product.id}
            className="border p-4 rounded shadow hover:scale-105 transition"
          >

            <img
              src={product.image}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="text-sm mt-3 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold mt-2">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 text-sm mt-2 block"
            >
              View Details →
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Home
