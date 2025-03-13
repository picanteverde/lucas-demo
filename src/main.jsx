import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ margin: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Lucas Brito's Landing Page</h1>
      <p>This is a simple React/Vite landing page.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);