import { FaBookmark } from "react-icons/fa";
import { AiOutlineFullscreen } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCollection } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const saveCollection = (item) => {
    dispatch(addCollection(item));
  };

  return (
    <div className="group w-full aspect-video relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:z-10">
      
      {/* --- Media Layer --- */}
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
            alt={item.title}
          />
        )}
      </div>

      {/* --- UI Overlay Layer (Buttons) --- */}
      {/* Using 'absolute inset-0' ensures the buttons sit directly on top of the image/video.
          'pointer-events-none' on the wrapper allows clicks to pass through to the buttons themselves.
      */}
      <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
        
        {/* Top Section: Save Button */}
        <div className="flex justify-end">
          <button 
            onClick={() => saveCollection(item)} 
            className="pointer-events-auto bg-blue-600 hover:bg-lime-300 hover:text-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            <FaBookmark size={12} /> Save
          </button>
        </div>

        {/* Bottom Section: Fullscreen Button */}
          
          <a 
            href={item.src} 
            target="_blank"  
            className="pointer-events-auto"
          >
            <button className="bg-lime-300 text-black p-2 rounded-lg hover:bg-white transition-colors cursor-pointer shadow-md">
              <AiOutlineFullscreen size={20} />
            </button>
          </a>

      </div>
    </div>
  );
}

export default ResultCard;