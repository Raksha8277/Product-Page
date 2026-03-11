import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between">

      <Link to="/">
        <h1 className="text-xl font-bold">
          FakeStore
        </h1>
      </Link>

      <p>Product API Demo</p>

    </div>
  )
}

export default Navbar