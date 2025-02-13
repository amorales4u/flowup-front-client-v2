import React, { useState, useEffect } from 'react';
import Login from './Login.tsx';
import Sidebar from './Sidebar.tsx';
import ItemList from './ItemList.tsx';
import ItemHeader from './ItemHeader.tsx';
import ItemDetail from './ItemDetail.tsx';

interface UserSession {
  token: string | null;
  name: string;
  firstName: string | null;
  lastName: string | null;
  surname: string | null;
  validTo: string | null;
  valid: boolean;
  groups: string[];
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserSession | null>(null);

  useEffect(() => {
    // Check for existing session on component mount
    const sessionData = localStorage.getItem('userSession');
    if (sessionData) {
      const session = JSON.parse(sessionData);
      if (session.valid) {
        setIsLoggedIn(true);
        setUserData(session);
      }
    }
  }, []);

  const handleLogin = (isValid: boolean, userData?: UserSession) => {
    setIsLoggedIn(isValid);
    if (userData) {
      setUserData(userData);
    }
  };

  const handleLogout = () => {
    // Clear session data
    localStorage.removeItem('userSession');
    setIsLoggedIn(false);
    setUserData(null);
  };

  const handleSaveItemDetail = (data: any) => {
    console.log('Saving item detail:', data);
    // Implement save logic here
  };

  const sidebarItems = [
    { name: 'Chat', description: 'Chat de usuarios', image: 'message-square', modifyDate: '2024-02-26 16:00' },
    { name: 'Notifications', description: 'Notifications', image: 'bell', modifyDate: '2024-02-26 16:00' },
    { name: 'Users', description: 'User management', image: 'users', modifyDate: '2024-02-26 16:00' },
    { name: 'Calendar', description: 'Event calendar', image: 'calendar', modifyDate: '2024-02-26 16:00' },
  ];

  const itemListItems = [
    { "name": "Sesion de Dudas", "description": "Usuarios con dudas", "image": null, "modifyDate": "2024-02-26 16:00" },
    { "name": "FOL-000-001", "description": "Modificaciiòn de datos del usuario", "image": null, "modifyDate": "2024-02-26 16:00" }
  ];

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-[#1f1f1f]">
      <Sidebar items={sidebarItems} onLogout={handleLogout} />
      <ItemList items={itemListItems} />
      <div className="flex-1 flex flex-col">
        <ItemHeader />
        <div className="flex-1 overflow-y-auto p-6">
          <ItemDetail
            title="Sesión De Dudas"
            date="30 Nov"
            time="2:00 PM - 2:30 PM, Sat"
            description="You created this meeting"
            onSave={handleSaveItemDetail}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
