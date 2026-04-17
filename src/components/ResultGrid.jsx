import { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  fetchPhotos, 
  fetchVideos, 
  fetchGifs,
  fetchStickers
} from "../api/mediaApi";
import { 
  setLoading, 
  setError, 
  setResults 
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  /**
   * 1. Data Formatter
   * Matches the keys used in your mediaApi responses.
   */
  const formatData = useCallback((res, tab) => {
    if (!res) return [];

    switch (tab) {
      case "Photos":
        return (res.results || []).map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description || "Photo",
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));

      case "Videos":
        return (res.videos || []).map((item) => {
          const videoFile = item.video_files?.find(f => f.quality === 'hd') || item.video_files?.[0];
          return {
            id: item.id,
            type: "video",
            title: item.user?.name || "Video",
            thumbnail: item.image,
            link: videoFile?.link || "", 
            src: item?.url
          };
        });

      case "GIFs":
      case "Stickers": // Both Giphy endpoints use the same data structure
        return (res.data || []).map((item) => ({
          id: item.id,
          type: tab === "GIFs" ? "gif" : "sticker",
          title: item.title || tab,
          thumbnail: item.images?.fixed_height?.url, 
          src: item.images?.original?.url,
        }));

      default:
        return [];
    }
  }, []);

  /**
   * 2. Side Effect - Data Fetching
   */
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      if (!query || query.trim() === "") return;

      try {
        dispatch(setLoading());
        let res;

        // Ensure these cases match your Tabs.jsx strings exactly
        if (activeTab === "Photos") res = await fetchPhotos(query);
        else if (activeTab === "Videos") res = await fetchVideos(query);
        else if (activeTab === "GIFs") res = await fetchGifs(query);
        else if (activeTab === "Stickers" || activeTab === "Emojis") res = await fetchStickers(query);

        if (isMounted) {
          const formattedData = formatData(res, activeTab);
          dispatch(setResults(formattedData));
        }
      } catch (err) {
        if (isMounted) {
          dispatch(setError(err.response?.data?.message || err.message));
        }
      }
    };

    getData();

    return () => { isMounted = false; };
  }, [query, activeTab, dispatch, formatData]);

  /**
   * 3. UI Rendering
   */
  const renderedGrid = useMemo(() => {
    return results.map((item) => (
      <ResultCard key={`${item.type}-${item.id}`} item={item} />
    ));
  }, [results]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20">
          <h2 className="text-red-500 text-xl font-bold">Search Failed</h2>
          <p className="text-gray-400 mt-1">{error}</p>
        </div>
      </div>
    );
  }

  return (
    // Added 'pb-20' to give space at the bottom for 3D tilts
    // Removed 'overflow-y-auto' here because the body/main usually handles it
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-20">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-32">
          <div className="w-16 h-16 border-4 border-lime-300 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(190,242,100,0.3)]"></div>
          <p className="mt-6 text-lime-300 font-bold animate-pulse tracking-widest uppercase text-xs">
            Loading {activeTab}
          </p>
        </div>
      ) : (
        /* The Grid: 3D perspective works best when there is enough gap */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 perspective-distant">
          {results.length > 0 ? (
            renderedGrid
          ) : (
            query && (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 text-xl italic">
                  No {activeTab.toLowerCase()} found for "{query}"
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ResultGrid;