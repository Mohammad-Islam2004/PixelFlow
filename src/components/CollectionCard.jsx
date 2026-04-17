import React from 'react'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { GoBookmarkSlashFill } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { removeCollection } from '../redux/features/collectionSlice';

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch()

  const removeBtn = (item) => {
    dispatch(removeCollection(item.id))
  }

  return (
    /* Removed fixed width/height for responsive grid compatibility */
    <div className="group relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:z-10">
      
      {/* --- Media Content --- */}
      <div className="w-full h-full">
        {item.type === 'video' ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            src={item.link} 
            className="w-full h-full object-cover"
          />
        ) : (
          <img 
            className="w-full h-full object-cover" 
            src={item.thumbnail || item.src} 
            alt={item.title || "Collection Item"} 
            loading="lazy"
          />
        )}
      </div>

      {/* --- Overlay Buttons --- */}
      <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
        
        {/* Top Right: Remove/Unsave Button */}
        <div className="flex justify-end">
          <button 
            onClick={() => removeBtn(item)} 
            className="pointer-events-auto bg-blue-600 hover:bg-red-600 text-white p-2 rounded-lg cursor-pointer transition-all duration-300 shadow-md active:scale-90 group/btn"
            title="Remove from collection"
          >
            <GoBookmarkSlashFill size={18} />
          </button>
        </div>

        {/* Bottom Left: Fullscreen Button */}
        <div className="flex justify-start">
          <a 
            href={item.src} 
            target="_blank" 
            rel="noreferrer" 
            className="pointer-events-auto"
          >
            <button className="bg-lime-300 text-black p-2 rounded-lg hover:bg-white transition-colors cursor-pointer shadow-md active:scale-95">
              <AiOutlineFullscreen size={20} />
            </button>
          </a>
        </div>

      </div>

      {/* Optional: Title Overlay on Hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
         <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full">
           Saved {item.type}
         </span>
      </div>

    </div>
  )
}

export default CollectionCard