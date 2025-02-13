import React, { useState } from 'react';
import Login from './Login.tsx';
import Sidebar from './Sidebar.tsx';
import ItemList from './ItemList.tsx';
import ItemHeader from './ItemHeader.tsx';
import ChatInput from './ChatInput.tsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isValid: boolean) => {
    setIsLoggedIn(isValid);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-[#1f1f1f]">
      <Sidebar />
      <ItemList />
      <div className="flex-1 flex flex-col">
        <ItemHeader />
        <div className="flex-1 overflow-y-auto p-4">
          <div className="bg-[#444791] text-white p-4 rounded-lg inline-block mb-4">
            <p className="font-semibold mb-2">You created this meeting</p>
            <div className="border border-[#555] rounded-lg">
              <div className="bg-[#2f2f2f] p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="text-center mr-3">
                    <span className="text-2xl font-bold">30</span>
                    <p className="text-xs text-gray-400">Nov</p>
                  </div>
                  <div>
                    <p className="text-purple-400">Sesión De Dudas</p>
                    <p className="text-sm text-gray-400">2:00 PM - 2:30 PM, Sat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
