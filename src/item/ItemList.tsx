import { useState } from 'react';
    import { Menu, Search } from 'lucide-react';
    import Item from './Item.tsx';

    interface ItemListProps {
      items: Storage[];
      onSelectItem: (item: Storage) => void; // Add onSelectItem prop
      selectedSidebarItem: Storage | undefined; // Add prop for selected sidebar item
    }

    function ItemList({ items, onSelectItem, selectedSidebarItem }: ItemListProps) {

        const [selectedItem, setSelectedItem] = useState<Storage>();

        const _onSelectItem = (item:Storage) => {
            setSelectedItem(item);
            if( onSelectItem ) {
                onSelectItem(item);
            }
        };


      return (
        <div className="bg-[#222222] bg-opacity-20 h-full p-4 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl font-semibold">{selectedSidebarItem?.name}</h2>
            <Menu className="text-gray-400" size={20} />
          </div>
          <div className="bg-[#292929] rounded-md p-2 flex items-center mb-4">
            <Search className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white outline-none w-full"
            />
          </div>
          <div className="space-y-4 overflow-y-auto flex-1">
            {items.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                message={item.description}
                date={item.modifyDate}
                active={item.id === selectedItem?.id}
                onClick={() => _onSelectItem(item)} // Call onSelectItem when item is clicked
              />
            ))}
          </div>
        </div>
      );
    }

    export default ItemList;
