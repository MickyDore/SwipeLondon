import { Navigate, Route, Routes } from 'react-router-dom';

import Header from '/src/components/Header';
import About from '/src/pages/About';
import Blog from '/src/pages/Blog';
import Explore from '/src/pages/Explore';
import Home from '/src/pages/Home';

function App() {
  return (
    <div className="flex flex-col w-full min-h-[100dvh] h-[100dvh] max-h-[100dvh]">
      <Header />
      <main className="flex-1 max-h-full overflow-y-auto">
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
