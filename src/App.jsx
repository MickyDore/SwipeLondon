import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '/src/pages/Home';

function App() {
  return (
    <div className="w-full min-h-[100dvh]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
