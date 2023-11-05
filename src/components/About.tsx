import BloomSVG from '/src/assets/images/bloom.svg';
import LoveSVG from '/src/assets/images/love.svg';
import SearchSVG from '/src/assets/images/search.svg';

export default function About() {
  const underline = {
    background:
      'linear-gradient(0deg, rgb(167, 219, 216, 0) 0%, rgb(167, 219, 216, 0) 16%, rgb(167, 219, 216, 1) 16%, rgb(167, 219, 216, 1) 41%, rgb(167, 219, 216, 0) 41%)',
  };

  return (
    <div className="w-full h-auto p-12 px-40 bg-gradient-to-br from-pastel-blue-200 to-pastel-blue-400 flex flex-col font-sans">
      <div className="flex max-h-60 my-8">
        <div className="w-80">
          <img
            src={BloomSVG}
            alt="A person hugging a phone screen."
            className="max-h-full drop-shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-5xl w-fit" style={underline}>
            #1 Swipe through date ideas
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non totam,
            tempore illo numquam tempora et odio, mollitia magnam ea quam adipisci dolores
            laborum! Eaque voluptatem optio natus sequi doloremque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veritatis commodi dolores ab inventore
            harum neque earum quisquam quos tempora a. Omnis deserunt accusantium commodi
            dolores vitae adipisci, doloribus maxime mollitia.
          </p>
        </div>
      </div>

      <div className="flex max-h-60 my-8">
        <div className="flex-1">
          <h3 className="font-bold text-5xl w-fit text-right" style={underline}>
            #2 Like your favourite date ideas
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non totam,
            tempore illo numquam tempora et odio, mollitia magnam ea quam adipisci dolores
            laborum! Eaque voluptatem optio natus sequi doloremque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veritatis commodi dolores ab inventore
            harum neque earum quisquam quos tempora a. Omnis deserunt accusantium commodi
            dolores vitae adipisci, doloribus maxime mollitia.
          </p>
        </div>
        <div className="w-80">
          <img
            src={SearchSVG}
            alt="A person hugging a phone screen."
            className="max-h-full drop-shadow-lg"
          />
        </div>
      </div>

      <div className="flex max-h-60 my-8">
        <div className="w-80">
          <img
            src={LoveSVG}
            alt="A person hugging a phone screen."
            className="max-h-full drop-shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-5xl w-fit" style={underline}>
            #3 Match liked ideas with your partner
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non totam,
            tempore illo numquam tempora et odio, mollitia magnam ea quam adipisci dolores
            laborum! Eaque voluptatem optio natus sequi doloremque. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Veritatis commodi dolores ab inventore
            harum neque earum quisquam quos tempora a. Omnis deserunt accusantium commodi
            dolores vitae adipisci, doloribus maxime mollitia.
          </p>
        </div>
      </div>
    </div>
  );
}
