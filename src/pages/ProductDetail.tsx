import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

interface Rating {
  rate: number
  count: number
}

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  rating: Rating
}

const addToCart = () => {
  alert("Product added to cart 🛒")
}

const buyNow = () => {
  alert("Proceeding to checkout 💳")
}

const addToWishlist = () => {
  alert("Added to wishlist ❤️")
}

const ProductDetail = () => {

  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  // const [qty, setQty] = useState(1)

  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [id])

  if (!product) return <h1 className="text-center mt-20 text-xl">Loading...</h1>

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">

        <Link
          to="/"
          className="inline-block mb-5 bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700 transition"
        >
          Back to Products
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-center">

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">

            <img
              src={product.image}
              className="h-52 md:h-64 object-contain"
            />

          </div>

          <div className="max-w-md">

            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mt-2">

              <span className="text-yellow-500 text-lg">
                ⭐ {product.rating.rate}
              </span>

              <span className="text-gray-500 text-sm">
                ({product.rating.count} reviews)
              </span>

            </div>

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

              <button 
              onClick={addToWishlist}
              className="bg-pink-300 text-red-800 px-4 py-2 rounded-2xl hover:bg-red-300 transition">
                ❤️ Wishlist
              </button>

              <button 
              onClick={addToCart}
              className="bg-blue-600 text-white px-5 py-2 rounded-2xl hover:bg-blue-700 transition">
                Add to Cart
              </button>

              <button 
              onClick={buyNow}
              className="bg-green-500 text-white px-5 py-2 rounded-2xl hover:bg-green-600 transition">
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