import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.tsx';
import ItemList from './item/ItemList.tsx';
import ItemApp from './item/ItemApp.tsx';
import Login from './Login.tsx';
import LogoutDialog from './LogoutDialog';
import { Workflow } from 'lucide-react';
import { Storage, ListResponse } from './model/StorageType.tsx';

interface LoginResponse {
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
  const [userData, setUserData] = useState<LoginResponse | null>(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeView, setActiveView] = useState<'preview' | 'edit' | 'attachments' | 'notes' | 'log'>('preview');
  const [selectedSidebarItem, setSelectedSidebarItem] = useState<Storage>();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const [sidebarItems, setSidebarItems] = useState<Storage[]>([]);
  const [itemListItems, setItemListItems] = useState<Storage[]>([]);

  const fetchStorageDirectory = async (token: string) => {
    try {
      const response = await fetch('http://localhost:8040/storage/dir', {
        headers: {
          'Authorization': sessionStorage.getItem('authToken') || token
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const listResponse: ListResponse<Storage> = await response.json();
      const authHeader = response.headers.get('Authorization');
      if (authHeader) {
        sessionStorage.setItem('authToken', authHeader);
      }

      setSidebarItems(listResponse.data);
    } catch (error) {
      console.error('Error fetching storage directory:', error);
    }
  };

  useEffect(() => {
    const sessionData = localStorage.getItem('userSession');
    if (sessionData) {
      try {
        const parsedData: LoginResponse = JSON.parse(sessionData);
        if (parsedData && parsedData.valid && parsedData.token) {
          setIsLoggedIn(true);
          setUserData(parsedData);
          fetchStorageDirectory(parsedData.token);
        }
      } catch (error) {
        console.error('Error parsing session data:', error);
        localStorage.removeItem('userSession');
      }
    }
  }, []);

  const handleLogin = (isValid: boolean, data?: LoginResponse) => {
    setIsLoggedIn(isValid);
    if (data && data.token) {
      setUserData(data);
      fetchStorageDirectory(data.token);
    }
  };

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('userSession');
    setIsLoggedIn(false);
    setUserData(null);
    setShowLogoutDialog(false);
    // Optionally, reset other app states
    setSelectedItem(null);
    setActiveView('preview');
    setSelectedSidebarItem(undefined);
  };

  const handleCancelLogout = () => {
    setShowLogoutDialog(false);
  };

  const handleSelectItem = (item: any) => {
    console.log('Selected item:', item);
    setSelectedItem(item);
  };

  const handleViewChange = (view: 'preview' | 'edit' | 'attachments' | 'notes' | 'log') => {
    setActiveView(view);
  };

  const handleSaveItemDetail = (data: any) => {
    console.log('Saving item detail:', data);
    // Implement save logic here
  };

  const handleCancelEdit = () => {
    setActiveView('preview');
  };

  const handleSidebarItemSelect = async (item: Storage) => {
    setSelectedSidebarItem(item);
    if (userData?.token) {
      try {
        const response = await fetch(`http://localhost:8040/storage/dir${item.path || ''}`, {
          headers: {
            'Authorization': sessionStorage.getItem('authToken') || userData.token
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const listResponse: ListResponse<Storage> = await response.json();
        const authHeader = response.headers.get('Authorization');
        if (authHeader) {
          sessionStorage.setItem('authToken', authHeader);
        }
        setItemListItems(listResponse.data);
      } catch (error) {
        console.error('Error fetching storage directory:', error);
      }
    }
  };
  /*
  const sidebarItems = [
    { id: "01JM2GSK7K4TH1K3YCCFZMGB0J", name: 'Grupos', description: 'Grupos', image: 'users', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GSY53FNRCFZKJD3QGS73C", name: 'Users', description: 'User management', image: 'user', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GT68WV3C43A3KGPNMF2PS", name: 'Tasks', description: 'Tasks', image: 'tasks', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GV1NDXG0W37P221ZV0T10", name: 'Process Instances', description: 'Process Instances', image: 'process-instances', modifyDate: '2024-02-26 16:00' },
    { id: "01JM2GV1NDXG0W37P221ZV0T11", name: 'Process', description: 'Process', image: 'process', modifyDate: '2024-02-26 16:00' },
  ];
  */
 /*
  const itemListItems = [
    { id: "01JM2GV9X01YYM2WVTXN6ZXKDM",name: "Admin", description: "Administrador general", image: null, modifyDate: "2024-02-26 16:00" },
    { id: "01JM2GVKT8J6EWG7X1BSJXN34R",name: "BPMN-ADMIN", description: "Grupo de administradores de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
    { id: "01JM2GVWHET2TYP0SKT7K58YC2",name: "BPMN-USER", description: "Grupo de usuarios de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
  ];
*/
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <div className="flex h-screen">
        <Sidebar items={sidebarItems} onLogout={handleLogout} onSelectItem={handleSidebarItemSelect} />
        <div className="w-72 h-full">
          <ItemList items={itemListItems} onSelectItem={handleSelectItem} selectedSidebarItem={selectedSidebarItem}/>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="h-16 flex items-center justify-between px-4 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
            <div className="flex items-center space-x-4">
              <Workflow size={24} />
              <h1 className="text-white text-lg font-semibold">FlowUp</h1>
            </div>
          </div>
          <ItemApp
            itemData={selectedItem}
            onViewChange={handleViewChange}
            activeView={activeView}
            onSave={handleSaveItemDetail}
            onCancel={handleCancelEdit}
          />
        </div>
      </div>
      <LogoutDialog
        isOpen={showLogoutDialog}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </>
  );
}

export default App;
