import { Navigate, Route, Routes } from 'react-router-dom';

import Header from '/src/components/Header';
import About from '/src/pages/About';
import Blog from '/src/pages/Blog';
import Explore from '/src/pages/Explore';
import Home from '/src/pages/Home';

function App() {
  return (
    <div className="w-full min-h-[100dvh] bg-pastel-pink-200">
      <Header />
      <main className="flex-1 max-h-full p-8 px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
