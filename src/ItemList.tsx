// In ItemList.tsx
import React from 'react';
import { Menu, Search } from 'lucide-react';
import Item from './Item';

interface ItemListProps {
  items: {
    name: string;
    description: string;
    image: string | null;
    modifyDate: string;
    time: string; // Add time prop
  }[];
  onSelectItem: (item: any) => void; // Add onSelectItem prop
}

function ItemList({ items, onSelectItem }: ItemListProps) {
  return (
    <div className="w-72 bg-[#222222] h-screen p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-semibold">Chat</h2>
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
      <div className="space-y-4">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            message={item.description}
            date={item.modifyDate}
            active={item.name === "Sesion de Dudas"}
            onClick={() => onSelectItem(item)} // Call onSelectItem when item is clicked
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
