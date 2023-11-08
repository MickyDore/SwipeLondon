import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DOMElement, useState } from 'react';
import LoadingSpinner from '/src/components/LoadingSpinner';

export default function Explore() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const [history, setHistory] = useState([]);

  // TODO - add a history option so the user can undo
  const onLike = (direction: number, card: DOMElement) => {
    card.style.transition = 'transform 1s';
    card.style.transform = `translate(${
      direction * window.innerWidth
    }px, ${0}px) rotate(${90 * direction}deg)`;
    console.log('you liked this card');
    // cards.shift();

    // setCards(cards.slice(0, -1));
  };

  const onDislike = (direction, card) => {
    card.style.transition = 'transform 1s';
    card.style.transform = `translate(${
      direction * window.innerWidth
    }px, ${0}px) rotate(${90 * direction}deg)`;
    console.log('you disliked this card');
    // setCards(cards.slice(1));
  };

  return (
    <div className="w-full h-full relative font-sans bg-gradient-to-bl from-pastel-pink-200  to-pastel-purple-200">
      <button
        type="button"
        className="rounded-full absolute right-12 top-8 w-12 h-12 bg-black"
      >
        <span className="font-bold flex -translate-x-[2px] -translate-y-[2px] rounded-full w-12 h-12 border-2 border-black bg-pastel-yellow-400 hover:bg-pastel-yellow-700 items-center justify-center text-2xl transition-all active:translate-x-0 active:translate-y-0">
          <FontAwesomeIcon
            className="drop-shadow-md w-6 h-6"
            icon="sliders"
            title="Filter your search results"
          />
        </span>
      </button>
      <div className="absolute top-12 left-12 w-20 h-20">
        <LoadingSpinner />
      </div>
    </div>
  );
}
