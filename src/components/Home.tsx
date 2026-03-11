import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

  useEffect(() => {

    let url = "https://fakestoreapi.com/products"

    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))

  }, [category])

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <CategoryFilter setCategory={setCategory} />

      <div className="grid grid-cols-4 gap-6">

        {products.map(product => (

          <div
            key={product.id}
            className="border p-4 rounded shadow hover:scale-105 transition"
          >

            <img
              src={product.image}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="text-sm mt-3">
              {product.title}
            </h2>

            <p className="text-green-600 font-bold">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 text-sm"
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