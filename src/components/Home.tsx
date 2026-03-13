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

    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 p-4 md:p-8">

      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h1>

      <SearchBar setSearch={setSearch} />

      <CategoryFilter setCategory={setCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">

        {filteredProducts.map(product => (

          <div
            key={product.id}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="bg-gray-200 rounded-2xl p-4">

              <img
                src={product.image}
                className="h-40 mx-auto object-contain"
              />

            </div>

            <h2 className="text-sm font-semibold mt-4 text-gray-700 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold text-lg mt-2">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Home
