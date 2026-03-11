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

  if (!product) return <h1>Loading...</h1>

  return (
    <div className="p-10 flex gap-10">

      <img
        src={product.image}
        className="h-80 object-contain"
      />

      <div>

        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="text-green-600 text-xl mt-2">
          ${product.price}
        </p>

        <p className="mt-5">
          {product.description}
        </p>

        <p className="mt-3 text-gray-500">
          Category: {product.category}
        </p>

      </div>

    </div>
  )
}

export default ProductDetail