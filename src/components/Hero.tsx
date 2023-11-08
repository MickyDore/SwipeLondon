import './hero.css';

import SwipeSVG from '/src/assets/images/swipe.svg';

import api from '/src/api/date';

async function getDates() {
  console.log('fetching data');
  const data = await api.getDates();

  console.log(data);
}

export default function Hero() {
  const underline = {
    background:
      'linear-gradient(0deg, rgb(167, 219, 216, 0) 0%, rgb(167, 219, 216, 0) 16%, rgb(167, 219, 216, 1) 16%, rgb(167, 219, 216, 1) 41%, rgb(167, 219, 216, 0) 41%)',
  };

  return (
    <>
      <div className="w-full h-full flex gap-4 p-8 px-20 font-sans bg-gradient-to-bl from-pastel-pink-200  to-pastel-purple-200">
        <div className="flex-1 min-h-full flex flex-col justify-center items-center">
          <p className="text-3xl text-center mb-2">Never again say the words</p>
          <p className="font-bold text-7xl text-center mx-auto">
            <span className="ThickUnderline">What do you wanna do tonight?</span>
          </p>
          <div className="mt-20 flex justify-center">
            <button type="button" className="rounded-md bg-black" onClick={getDates}>
              <span className="font-bold block -translate-x-1 -translate-y-1 rounded-md border-2 border-black bg-pastel-yellow-400 hover:bg-pastel-yellow-700 p-4 text-2xl transition-all  active:translate-x-0 active:translate-y-0">
                Find date ideas now
              </span>
            </button>
          </div>
        </div>

        <div className="min-h-full h-full flex justify-center items-center px-40">
          <img
            src={SwipeSVG}
            alt="A person hugging a phone screen."
            className="transform -rotate-[4deg]"
          />
        </div>
      </div>
    </>
  );
}
