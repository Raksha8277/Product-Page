import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"

interface Product {
  id: number
  title: string
  price: number
  image: string
  rating?: {
    rate: number
  }
}

const Home = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    let url = "https://fakestoreapi.com/products"

    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })

  }, [category])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-200 to-blue-50 p-6 md:p-10">

      <h1 className="text-4xl font-bold mb-10 text-center text-purple-800">
        Explore Our Products 🛍️
      </h1>

      <SearchBar setSearch={setSearch} />

      <CategoryFilter setCategory={setCategory} />

      {loading && (
        <p className="text-center text-lg text-gray-600 mt-10">
          Loading products....
        </p>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-lg text-gray-600 mt-10">
          No products found
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">

        {filteredProducts.map(product => (

          <div
            key={product.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <div className="bg-gray-100 rounded-xl p-4 overflow-hidden">

              <img
                src={product.image}
                className="h-40 mx-auto object-contain hover:scale-110 transition duration-300"
              />

            </div>

            <h2 className="text-sm font-semibold mt-4 text-gray-700 line-clamp-2">
              {product.title}
            </h2>

            <div className="flex items-center justify-between mt-2">

              <p className="text-green-600 font-bold text-lg">
                ${product.price}
              </p>

              {product.rating && (
                <span className="text-yellow-500 text-sm">
                  ⭐ {product.rating.rate}
                </span>
              )}

            </div>

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
