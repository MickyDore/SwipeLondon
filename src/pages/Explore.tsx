import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Explore() {
  return (
    <div className="w-full h-full relative font-sans bg-gradient-to-bl from-pastel-pink-200  to-pastel-purple-200">
      <button
        type="button"
        className="rounded-full absolute right-4 top-4 w-12 h-12 bg-black"
      >
        <span className="font-bold flex -translate-x-[2px] -translate-y-[2px] rounded-full w-12 h-12 border-2 border-black bg-pastel-yellow-400 hover:bg-pastel-yellow-700 items-center justify-center text-2xl transition-all active:translate-x-0 active:translate-y-0">
          <FontAwesomeIcon
            className="drop-shadow-md w-6 h-6"
            icon="sliders"
            title="Filter your search results"
          />
        </span>
      </button>
      <div className="w-fullh-full"></div>
    </div>
  );
}
