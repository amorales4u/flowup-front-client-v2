import React from 'react';
import { Bell, Calendar, MessageSquare, Users, LogOut } from 'lucide-react';

interface SidebarItem {
  name: string;
  description: string;
  image: string;
  modifyDate: string;
}

interface SidebarProps {
  items: SidebarItem[];
  onLogout: () => void;
}

// Simple icon mapping function.  Expand this as needed.
function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'message-square':
      return MessageSquare;
    case 'bell':
      return Bell;
    case 'users':
      return Users;
    case 'calendar':
      return Calendar;
    // Add more mappings here
    default:
      return null; // Or a default icon
  }
}

function Sidebar({ items, onLogout }: SidebarProps) {
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  return (
    <div className="w-16 bg-[#2f2f2f] h-screen flex flex-col items-center py-4 space-y-6">
      {items.map((item, index) => {
        const IconComponent = getIconComponent(item.image);
        return (
          <div
            key={index}
            title={item.description}
            className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)]"
          >
            {IconComponent ? (
              <IconComponent size={24} className={item.name === "Chat" ? "text-white" : ""} />
            ) : (
              <span>?</span>
            )} {/* Display "?" if no icon found */}
          </div>
        );
      })}

      {/* Logout Button */}
      <div
        title="Logout"
        className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)] mt-auto"
        onClick={handleLogout}
      >
        <LogOut size={24} />
      </div>
    </div>
  );
}

export default Sidebar;
