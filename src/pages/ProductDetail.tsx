import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

  if (!product) return <h1 className="text-center mt-10">Loading...</h1>

  return (
    <div className="p-4 md:p-10">

      <div className="flex flex-col md:flex-row gap-10 items-center">

        {/* Product Image */}
        <img
          src={product.image}
          className="h-64 md:h-80 object-contain"
        />

        {/* Product Info */}
        <div className="max-w-xl">

          <h1 className="text-xl md:text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-green-600 text-lg md:text-xl mt-3">
            ${product.price}
          </p>

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          <p className="mt-3 text-gray-500">
            Category: {product.category}
          </p>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail