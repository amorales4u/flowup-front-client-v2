import { useState } from 'react';
    import Sidebar from './Sidebar.tsx';
    import ItemList from './ItemList.tsx';
    import ItemHeader from './ItemHeader.tsx';
    import ItemDetail from './ItemDetail.tsx';

    interface SidebarItem {
      name: string;
      description: string;
      image: string;
      modifyDate: string;
    }

    function App() {
      const [selectedItem, setSelectedItem] = useState(null);

      const handleSelectItem = (item: any) => {
        console.log('Selected item:', item);
        setSelectedItem(item);
      }

      const sidebarItems = [
        { id: "01JM2GSK7K4TH1K3YCCFZMGB0J", name: 'Grupos', description: 'Grupos', image: 'users', modifyDate: '2024-02-26 16:00' },
        { id: "01JM2GSY53FNRCFZKJD3QGS73C", name: 'Users', description: 'User management', image: 'user', modifyDate: '2024-02-26 16:00' },
        { id: "01JM2GT68WV3C43A3KGPNMF2PS", name: 'Notifications', description: 'Notifications', image: 'ClipboardCheck', modifyDate: '2024-02-26 16:00' },
        { id: "01JM2GV1NDXG0W37P221ZV0T10", name: 'Calendar', description: 'Event calendar', image: 'calendar', modifyDate: '2024-02-26 16:00' },
      ];

      const itemListItems = [
        { id: "01JM2GV9X01YYM2WVTXN6ZXKDM",name: "Admin", description: "Administrador general", image: null, modifyDate: "2024-02-26 16:00" },
        { id: "01JM2GVKT8J6EWG7X1BSJXN34R",name: "BPMN-ADMIN", description: "Grupo de administradores de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
        { id: "01JM2GVWHET2TYP0SKT7K58YC2",name: "BPMN-USER", description: "Grupo de usuarios de BPMN", image: null, modifyDate: "2024-02-26 16:00" },
      ];

      return (
        <div className="flex h-screen bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
          <Sidebar items={sidebarItems} onLogout={() => {}} />
          <div className="w-72 h-full">
            <ItemList items={itemListItems} onSelectItem={handleSelectItem}/>
          </div>
          <div className="flex-1 flex flex-col">
            <ItemHeader itemData={selectedItem}/>
            {selectedItem && (
              <ItemDetail itemData={selectedItem} />
            )}
          </div>
        </div>
      );
    }

    export default App;
