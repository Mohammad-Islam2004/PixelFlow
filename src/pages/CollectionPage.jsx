import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import CollectionNavBar from '../components/CollectionNavBar'
import { clearCollection } from "../redux/features/collectionSlice";
import { MdDelete, MdOutlineCollectionsBookmark } from "react-icons/md";
import { Link } from 'react-router-dom';

const CollectionPage = () => {
  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection.items)

  const clearAll = () => {
    const confirmClear = window.confirm("Are you sure? This will permanently delete all your saved media.");
    
    if (confirmClear) {
      localStorage.removeItem("savedContent");
      dispatch(clearCollection()); 
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <CollectionNavBar />
      
      <main className="flex-1 flex flex-col p-4 md:p-8">
        {collection.length > 0 ? (
          <>
            {/* --- Header Section --- */}
            <div className="flex flex-row justify-between items-center px-5 py-4 border-b border-white/5 mb-6">
  
  <h1 className="text-xl md:text-3xl font-bold tracking-tight flex items-center gap-3">
    Your Collection &gt;&gt;
    <span className="hidden xs:block text-lime-300">
      &gt;&gt;
    </span>
  </h1>

  <button 
    onClick={clearAll} 
    className="whitespace-nowrap px-4 py-2 text-sm md:text-base font-bold rounded-xl active:scale-95 cursor-pointer bg-red-600 hover:bg-red-700 text-white transition-all flex gap-2 items-center shadow-lg shadow-red-900/20"
  >
    <MdDelete size={20} /> 
    <span className="hidden sm:inline">Clear All</span>
    <span className="inline sm:hidden">Clear</span> 
  </button>

</div>

            {/* --- Grid Section --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {collection.map((item, idx) => (
                <div key={item.id || idx} className="h-full">
                  <CollectionCard item={item} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* --- Responsive Empty State --- */
          <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
            <div className="bg-white/5 p-8 rounded-full mb-6">
              <MdOutlineCollectionsBookmark size={80} className="text-gray-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-300 mb-4">
              Your collection is empty
            </h1>
            <p className="text-gray-500 max-w-md mb-8">
              Explore thousands of high-quality photos, videos, and GIFs to build your personal library.
            </p>
            <Link to="/">
              <button className="bg-lime-300 text-black px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors active:scale-95">
                Start Exploring
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}

export default CollectionPage