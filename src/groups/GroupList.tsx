import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import Item from '../item/Item.tsx';

interface GroupListProps {
  groups: {
    id: string;
    name: string;
    description: string;
    modifyDate: string;
  }[];
  onSelectGroup: (group: any) => void;
  selectedSidebarItem: string | null;
}

function GroupList({ groups, onSelectGroup, selectedSidebarItem }: GroupListProps) {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    if (onSelectGroup) {
      onSelectGroup(group);
    }
  };

  return (
    <div className="bg-[#222222] bg-opacity-20 h-full p-4 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-semibold">{selectedSidebarItem}</h2>
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
        {groups.map((group) => (
          <Item
            key={group.id}
            name={group.name}
            message={group.description}
            date={group.modifyDate}
            active={group.id === selectedGroup?.id}
            onClick={() => handleSelectGroup(group)}
          />
        ))}      
      </div>
    </div>
  );
}

export default GroupList;