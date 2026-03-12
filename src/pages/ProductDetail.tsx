import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
}

const ProductDetail = () => {

  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [id])

  if (!product) return <h1 className="text-center mt-20 text-xl">Loading...</h1>

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block mb-5 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Product Image */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">

            <img
              src={product.image}
              className="h-52 md:h-64 object-contain"
            />

          </div>

          {/* Product Info */}
          <div className="max-w-md">

            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-green-600 text-xl font-semibold mt-3">
              ${product.price}
            </p>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Category: <span className="font-medium">{product.category}</span>
            </p>

            <div className="flex gap-3 mt-5">

              <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button className="bg-green-500 text-white px-5 py-2 rounded-2xl hover:bg-green-600 transition">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ProductDetail