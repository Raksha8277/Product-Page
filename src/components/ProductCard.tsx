import { Link } from "react-router-dom"

const ProductCard = ({ product }: any) => {

  return (
    <div className="border rounded-lg p-4 shadow hover:scale-105 transition">

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
        className="text-blue-500"
      >
        View Details
      </Link>

    </div>
  )
}

export default ProductCard