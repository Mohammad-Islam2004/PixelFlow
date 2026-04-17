import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../redux/features/searchSlice"
import { FaBookmark, FaRegPlayCircle, FaSearch } from "react-icons/fa"
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom"

const SearchBar = () => {
  const [searchText, setSearchText] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setQuery(searchText))
    setSearchText("")
  }

  return (
    <nav className="w-full bg-blue-900/40 shadow-gray-500/40 shadow-sm border-b border-white/10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row justify-between items-center py-4 px-5 gap-4 lg:gap-7"
      >
        {/* --- Logo Section --- */}
        <div className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start">
          <div className="bg-lime-300 h-10 w-10 rounded-lg flex items-center justify-center font-black text-black">
            <FaRegPlayCircle size={25} />
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">
            Pixel<span className="text-lime-300">Flow</span>
          </span>
        </div>

        {/* --- Search Input Section --- */}
        <div className="flex gap-2 w-full lg:w-[45%] xl:w-[50%]">
          <input
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search your media..."
            className="flex-1 bg-white/10 border border-white/20 px-4 py-2 text-lg rounded-xl outline-none text-white focus:border-lime-300 transition-all placeholder:text-gray-400"
          />
          <button className="bg-lime-300 text-black px-5 py-2 text-lg font-bold rounded-xl active:scale-95 transition-transform flex items-center gap-2 hover:bg-lime-400">
            <FaSearch size={16} /> 
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="flex gap-3 w-full lg:w-auto justify-center lg:justify-end">
          <Link to="/" className="flex-1 lg:flex-none">
            <button className="w-full px-4 py-2 text-lg rounded-xl text-white bg-sky-600/20 border border-sky-500/50 hover:bg-sky-600 transition-all active:scale-95 flex gap-2 justify-center items-center">
              <IoHomeSharp size={18} /> 
              <span className="sm:inline">Home</span>
            </button>
          </Link>
          <Link to="/collection" className="flex-1 lg:flex-none">
            <button className="w-full px-4 py-2 text-lg rounded-xl text-white bg-sky-600/20 border border-sky-500/50 hover:bg-sky-600 transition-all active:scale-95 flex gap-2 justify-center items-center">
              <FaBookmark size={18} /> 
              <span className="sm:inline">Collection</span>
            </button>
          </Link>
        </div>
      </form>
    </nav>
  )
}

export default SearchBar