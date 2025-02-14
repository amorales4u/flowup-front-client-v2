import { useState, useEffect } from 'react';
import Login from './Login.tsx';
import Sidebar from './Sidebar.tsx';
import ItemList from './ItemList.tsx';
import ItemHeader from './ItemHeader.tsx';

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
    { id: "01JM2GSK7K4TH1K3YCCFZMGB0J", name: 'Grupos', description: 'Grupos', image: 'users', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GSY53FNRCFZKJD3QGS73C", name: 'Users', description: 'User management', image: 'user', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GT68WV3C43A3KGPNMF2PS", name: 'Notifications', description: 'Notifications', image: 'bell', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GV1NDXG0W37P221ZV0T10", name: 'Calendar', description: 'Event calendar', image: 'calendar', modifyDate: '2024-02-26 16:00' },
  ];

  const itemListItems = [
    { id: "01JM2GV9X01YYM2WVTXN6ZXKDM",name: "Admin", description: "Administrador general", image: null, modifyDate: "2024-02-26 16:00" },
    { id: "01JM2GVKT8J6EWG7X1BSJXN34R",name: "BPMN-ADMIN", description: "Grupo de administradores de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
    { id: "01JM2GVWHET2TYP0SKT7K58YC2",name: "BPMN-USER", description: "Grupo de usuarios de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
    { id: "01JM2GVWHET2TYP0SKT7K58YC2",name: "amorales", description: "Antonio Morales", image: null, modifyDate: "2024-02-26 16:00" },
  ];
/*
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }
*/
  return (
    <div className="flex h-screen bg-[#1f1f1f]">
      <Sidebar items={sidebarItems} onLogout={handleLogout} />
      <ItemList items={itemListItems} />
      <div className="flex-1 flex flex-col">
        <ItemHeader itemData={itemListItems[0]}/>
      </div>
    </div>
  );
}

export default App;
