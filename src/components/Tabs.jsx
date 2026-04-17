import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs", "Stickers"];
  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
      {/* 1. whitespace-nowrap: Prevents text from wrapping to a new line
          2. overflow-x-auto: Enables horizontal scrolling
          3. scrollbar-hide: Keeps it clean (requires a small CSS utility below)
      */}
      <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide gap-4 py-4 px-6 max-w-7xl mx-auto no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          
          return (
            <button
              key={tab}
              onClick={() => dispatch(setActiveTab(tab))}
              className={`
                relative px-8 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300 shrink-0
                ${isActive 
                  ? 'text-black bg-lime-300 shadow-[0_0_15px_rgba(190,242,100,0.4)]' 
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10'
                }
              `}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;