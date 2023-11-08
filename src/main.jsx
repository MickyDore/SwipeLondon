import './index.css';

import { StrictMode } from 'react';
// import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import icons from '/src/utils/icons';

import App from './App';

// async function deferRender() {
//   if (process.env.NODE_ENV !== 'development') {
//     return;
//   }
//   const { worker } = await import('./mocks/browser');
//   console.log('got here');

//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start();
// }

// deferRender().then(() => {
//   ReactDOM.render(
// <React.StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// </React.StrictMode>,
//     document.getElementById('root'),
//   );
// });

// const root = createRoot(document.getElementById('root'));

if (import.meta.env.MODE === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      ReactDOM.render(
        <StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StrictMode>,
        document.getElementById('root'),
      );
    });
} else {
  ReactDOM.render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
    document.getElementById('root'),
  );
}
