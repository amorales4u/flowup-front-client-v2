import React from 'react';
import { Bell, Calendar, MessageSquare, Users } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-16 bg-[#2f2f2f] h-screen flex flex-col items-center py-4 space-y-6">
      <div
        title="Chat"
        className="w-10 h-10 flex items-center justify-center rounded-md bg-[#444791] text-white cursor-pointer"
      >
        <MessageSquare size={20} />
      </div>
      <div
        title="Notifications"
        className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)]"
      >
        <Bell size={24} />
      </div>
      <div
        title="Users"
        className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)]"
      >
        <Users size={24} />
      </div>
      <div
        title="Calendar"
        className="text-gray-400 hover:text-white cursor-pointer hover:bg-[#444791] hover:rounded-xl transition-all duration-200 ease-in-out p-2 hover:shadow-[0_0_10px_rgba(100,100,255,0.5)]"
      >
        <Calendar size={24} />
      </div>
    </div>
  );
}

export default Sidebar;
