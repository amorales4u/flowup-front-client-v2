import React, { useState } from 'react';
import {Bell, Calendar, Users, User, LogOut, Workflow} from 'lucide-react';
import LogoutDialog from './LogoutDialog';

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

function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'users':
      return Users;
    case 'bell':
      return Bell;
    case 'user':
      return User;
    case 'calendar':
      return Calendar;
    default:
      return null;
  }
}

function Sidebar({ items, onLogout }: SidebarProps) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutDialog(false);
    onLogout();
  };

  const handleLogoutCancel = () => {
    setShowLogoutDialog(false);
  };

  return (
    <>
      <div className="w-16 bg-[#2f2f2f] h-screen flex flex-col items-center py-4 space-y-6">

        <div
            title="FlowUp"
            className="text-gray-400 cursor-pointer text-white"
        >
          <Workflow size={24} />
        </div>

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
              )}
            </div>
          );
        })}

        <div
          title="Logout"
          className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)] mt-auto"
          onClick={handleLogoutClick}
        >
          <LogOut size={24} />
        </div>
      </div>

      <LogoutDialog
        isOpen={showLogoutDialog}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />
    </>
  );
}

export default Sidebar;
