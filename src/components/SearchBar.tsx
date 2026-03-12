const SearchBar = ({ setSearch }: any) => {

  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 w-full mb-6"
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar