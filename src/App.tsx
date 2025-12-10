import React, { useState } from 'react';
import { useCounterStore, useUserStore } from './store';

const App: React.FC = () => {
  const { count: number, set: setCounter } = useCounterStore();
  const { username, set: setUsername } = useUserStore();
  const [inputValue, setInputValue] = useState('');

  const updateUsername = () => {
    setUsername(inputValue);
  };
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white space-y-10">
      <div className="text-2xl mb-4">Count: {number}</div>
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setCounter(number + 1)}
      >
        Increment
      </button>

      <div className="text-2xl mt-8 mb-4">Username: {username}</div>
      <input
        className="px-2 py-1 rounded text-black"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter username"
      />
      <button
        className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 mt-2"
        onClick={updateUsername}
      >
        Update Username
      </button>

      <div className="mt-8 max-w-md text-center text-gray-400">
        The counter state is not persisted and will reset on page reload, while
        the username state is persisted in local storage.
      </div>
    </div>
  );
};

export default App;
