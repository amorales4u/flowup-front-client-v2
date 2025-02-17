import { useState } from 'react';
    import Sidebar from './Sidebar.tsx';
    import ItemList from './ItemList.tsx';
    import ItemApp from './item/ItemApp.tsx';
    // import ItemDetail from './ItemDetail.tsx';

    interface SidebarItem {
      name: string;
      description: string;
      image: string;
      modifyDate: string;
    }

    function App() {
      const [selectedItem, setSelectedItem] = useState(null);
      const [activeView, setActiveView] = useState<'preview' | 'edit' | 'attachments' | 'notes' | 'log'>('preview');

      const handleSelectItem = (item: any) => {
        console.log('Selected item:', item);
        setSelectedItem(item);
      }

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
      ];

      return (
        <div className="flex h-screen">
          <Sidebar items={sidebarItems} onLogout={() => {}} />
          <div className="w-72 h-full">
            <ItemList items={itemListItems} onSelectItem={handleSelectItem}/>
          </div>
          <div className="flex-1 flex flex-col">
            <ItemApp
              itemData={selectedItem}
              onViewChange={handleViewChange}
              activeView={activeView}
              onSave={handleSaveItemDetail}
              onCancel={handleCancelEdit}
            />
            {/* {selectedItem && (
              <ItemDetail
                itemData={selectedItem}
                onSave={handleSaveItemDetail}
              />
            )} */}
          </div>
        </div>
      );
    }

    export default App;
