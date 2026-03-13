import { useEffect, useState } from "react"

interface Props {
  setCategory: (category: string) => void
}

const CategoryFilter = ({ setCategory }: Props) => {

  const [categories, setCategories] = useState<string[]>([])
  const [active, setActive] = useState<string>("all")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  const handleCategory = (cat: string) => {
    setCategory(cat)
    setActive(cat)
  }

  return (

    <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-2xl p-6 mb-8">

      <h2 className="text-xl font-bold mb-5 text-center text-gray-800 justify-center">
        Shop by Category
      </h2>

      <div className="flex flex-wrap gap-3 justify-center">

        <button
          onClick={() => handleCategory("all")}
          className={`px-5 py-2 rounded-full font-medium transition transform hover:scale-105
          ${active === "all"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"}
          `}
        >
          All
        </button>

        {categories.map((cat) => (

          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium capitalize transition transform hover:scale-105
            ${active === cat
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"}
            `}
          >
            {cat}
          </button>

        ))}

      </div>

    </div>

  )
}

export default CategoryFilter
