// node_modules imports 
import React from 'react' // core react library
import ReactDOM from 'react-dom/client' // React package for working with the DOM.

// custom imports
import App from './App.tsx' // App Component
import './index.css' // global css

// App Component is rendered in div which has id root (in index.html)
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
