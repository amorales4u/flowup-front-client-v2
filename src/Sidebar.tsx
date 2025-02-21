import React, { useState } from 'react';
import {Bell, Calendar, Users, User, LogOut, ClipboardCheck, List, Check, FileText, Workflow} from 'lucide-react';
import LogoutDialog from './LogoutDialog';
import { Storage } from './model/StorageType';

interface SidebarProps {
  items: Storage[];
  onLogout: () => void;
  onSelectItem: (item: Storage) => void;
  selectedItemName?: string;
}

    function getIconComponent(iconName?: string) {
      switch (iconName) {
        case 'users':
          return Users;
        case 'ClipboardCheck':
          return ClipboardCheck;
        case 'user':
          return User;
        case 'calendar':
          return Calendar;
        case 'List':
          return List;
        case 'workflow':
          return Workflow;
        case 'bell':
          return Bell;
        case 'tasks':
          return Check;
        case 'process-instances':
          return FileText;
        case 'process':
          return Workflow;
        default:
          return null;
      }
    }

    function Sidebar({ items, onLogout, onSelectItem }: SidebarProps) {
      const [showLogoutDialog, setShowLogoutDialog] = useState(false);
      const [selectedItem, setSelectedItem] = useState<Storage>();

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

      const handleItemClick = (item: Storage) => {
        setSelectedItem(item);
        if (onSelectItem) {
          onSelectItem(item);
        }
      };

      return (
        <>
          <div className="w-16 h-screen flex flex-col items-center py-4 space-y-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">

            <div
                title="FlowUp"
                className="text-gray-400 cursor-pointer text-white"
            >
              <svg width="80" height="30" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40L40 10H160L190 40L160 70H40Z" fill="#00A3AD"/>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24" fontWeight="bold" fill="white">FlowUp</text>
              </svg>
            </div>

            {items.map((item, index) => {
              const IconComponent = getIconComponent(item?.image);
              const isSelected = item.id === selectedItem?.id; // Check if this item is selected
              return (
                <div
                  key={index}
                  title={item.description}
                  className={`text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)] flex flex-col items-center ${isSelected ? 'bg-[#444791] rounded-xl shadow-[0_0_10px_rgba(100,100,255,0.5)]' : ''}`} // Apply styles if selected
                  onClick={() => handleItemClick(item)} // Add onClick handler
                >
                  {IconComponent ? (
                    <IconComponent size={24} className={item.name === "Chat" ? "text-white" : ""} />
                  ) : (
                    <span>?</span>
                  )}
                  <span className="text-[0.65rem] mt-1">{item.name}</span>
                </div>
              );
            })}

            <div
              title="Logout"
              className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)] flex flex-col items-center mt-auto"
              onClick={handleLogoutClick}
            >
              <LogOut size={24} />
              <span className="text-[0.65rem] mt-1">Logout</span>
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
