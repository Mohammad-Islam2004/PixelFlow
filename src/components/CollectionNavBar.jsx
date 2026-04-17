import { FaBookmark, FaRegPlayCircle } from "react-icons/fa"
import { IoHomeSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

const CollectionNavBar = () => {
  return (
    <nav className="w-full bg-blue-900/40 shadow-gray-500/40 shadow-sm border-b border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-5 gap-5">
        
        {/* --- Logo Section --- */}
        <div className="flex items-center gap-2">
          <div className="bg-lime-300 h-10 w-10 rounded-lg flex items-center justify-center font-black text-black">
            <FaRegPlayCircle size={25} />
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">
            Pixel<span className="text-lime-300">Flow</span>
          </span>
        </div>

        {/* --- Navigation Buttons --- */}
        <div className="flex gap-3 w-full sm:w-auto justify-center">
          <Link to="/" className="flex-1 sm:flex-none">
            <button className="w-full px-5 py-2 text-lg font-medium rounded-xl text-white bg-sky-600/20 border border-sky-500/50 hover:bg-sky-600 transition-all active:scale-95 flex gap-2 justify-center items-center">
              <IoHomeSharp size={18} /> 
              <span>Home</span>
            </button>
          </Link>
          
          <Link to="/collection" className="flex-1 sm:flex-none">
            <button className="w-full px-5 py-2 text-lg font-medium rounded-xl text-white bg-sky-600 transition-all active:scale-95 flex gap-2 justify-center items-center shadow-lg shadow-sky-600/20">
              <FaBookmark size={18} /> 
              <span>Collection</span>
            </button>
          </Link>
        </div>
        
      </div>
    </nav>
  )
}

export default CollectionNavBar