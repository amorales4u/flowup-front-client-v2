import React from 'react';
import { ChevronLeft, ChevronRight, Video, PenSquare, Settings } from 'lucide-react';
import { Edit2, Save, X, MessageSquare, File, Image, FileText, List } from 'lucide-react';

function ItemHeader() {
  return (
    <div className="h-16 border-b border-[#2f2f2f] flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-white text-lg font-semibold">Sesión De Dudas</h1>
      </div>
      <div className="flex items-center space-x-4">
        <PenSquare className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <File className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <FileText className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        <List className="text-gray-400 hover:text-white cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default ItemHeader;
