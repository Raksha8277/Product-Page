const SearchBar = ({ setSearch }: any) => {

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border text-gray-700 p-2 w-full bg-gray-00 rounded-2xl mb-6 hover:bg-blue-300 transition"
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar