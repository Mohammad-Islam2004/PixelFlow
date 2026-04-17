import { useSelector } from 'react-redux';
import ResultGrid from '../components/ResultGrid';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';

const Home = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* SearchBar is always at the top */}
      <SearchBar />

      <main className="flex-1 flex flex-col">
        {query.trim() !== '' ? (
          <div className="flex-1">
            <Tabs />
            <ResultGrid />
          </div>
        ) : (
          /* Responsive Welcome Screen Container */
          <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
            
            {/* Main Heading */}
            <h1 className="font-bold text-white text-4xl md:text-6xl tracking-tight">
              Welcome to{" "}
              <span className="text-lime-300 italic underline decoration-blue-500 underline-offset-8">
                PixelFlow
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="mt-6 font-semibold text-gray-300 text-lg md:text-2xl max-w-2xl">
              Photos, Videos, GIFs—Curated for your next big idea
            </h2>

            {/* Tagline */}
            <p className="mt-4 text-gray-400 italic font-medium">
              "Search it. Save it. Send it."
            </p>

            {/* Inline GIFs Section */}
            <div className="mt-8 flex gap-4 justify-center">
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ZtM3VxMWtteHRuOWQ2dGF2ajhjdzY0bWF1em9qMWtpZ2V4bnplZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xGdvlOVSWaDvi/giphy.gif" 
                alt="Animated Icon 1"
                className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-lime-300/20 border border-white/10" 
              />
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a2Vqa2VwbjBpN244aTNkOG9lMHhyd2xvbWV3YTA3aTc5ZW1vazA2aCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WPaidaGlJ0COg5WPwq/giphy.gif" 
                alt="Animated Icon 2"
                className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-blue-500/20 border border-white/10" 
              />
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3MGY5ZzhkZTZseWY2MTE4ZGNoNWpqaGM5bGhicHUzOHpvM2xlMnI2eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/v5iP55aTuFWrIwUJ32/giphy.gif" 
                alt="Animated Icon 3"
                className="w-12 h-12 rounded-xl object-cover shadow-lg shadow-purple-500/20 border border-white/10" 
              />
            </div>

          </div>
        )}
      </main>
    </div>
  );
};

export default Home;