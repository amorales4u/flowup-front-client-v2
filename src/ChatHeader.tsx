import React from 'react';
import { ChevronLeft, ChevronRight, Video, PenSquare, Settings } from 'lucide-react';

function ChatHeader() {
  return (
    <div className="h-16 border-b border-[#2f2f2f] flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <ChevronLeft className="text-gray-400" size={20} />
        <ChevronRight className="text-gray-400" size={20} />
        <h1 className="text-white text-lg font-semibold">Sesión De Dudas</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Video className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <PenSquare className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <Settings className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default ChatHeader;
