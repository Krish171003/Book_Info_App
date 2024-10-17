import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-600 to-black text-white font-sans">
      <h1 className="text-6xl font-bold mb-8">Welcome To My Library</h1>
      <Link
        to="/books"
        className="bg-white text-red-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-200 hover:text-red-800 transition duration-300"
      >
        Browse Books
      </Link>
    </div>
  )
}

export default Intro
