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
    <div className="flex gap-4 mb-6 flex-wrap">

      <button
        onClick={() => setCategory("all")}
        className="bg-gray-200 px-3 py-1 rounded"
      >
        All
      </button>

      {categories.map((cat) => (

        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          {cat}
        </button>

      ))}

    </div>
  )
}

export default CategoryFilter