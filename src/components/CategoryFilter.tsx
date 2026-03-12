import { useEffect, useState } from "react"

interface Props {
  setCategory: (category: string) => void
}

const CategoryFilter = ({ setCategory }: Props) => {

  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (

    <div className="bg-white shadow-md rounded-xl p-4 mb-8">

      <h2 className="text-lg font-semibold mb-4 text-gray-700">
        Filter by Category
      </h2>

      <div className="flex gap-3 flex-wrap">

        
        <button
          onClick={() => setCategory("all")}
          className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          All
        </button>

        {categories.map((cat) => (

          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white transition capitalize"
          >
            {cat}
          </button>

        ))}

      </div>

    </div>

  )
}

export default CategoryFilter
