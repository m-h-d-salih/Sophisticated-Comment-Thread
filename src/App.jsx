import React from 'react';
import CommentThread from './components/commentThread';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Sophisticated Comment Thread</h1>
      </header>
      <CommentThread />
    </div>
  );
}

export default App;
