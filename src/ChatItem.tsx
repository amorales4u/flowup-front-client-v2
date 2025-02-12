import React from 'react';

interface ChatItemProps {
  name: string;
  message: string;
  date: string;
  active?: boolean;
}

function ChatItem({ name, message, date, active = false }: ChatItemProps) {
  return (
    <div className={`p-3 rounded-md cursor-pointer ${active ? 'bg-[#444791]' : 'hover:bg-[#2f2f2f]'}`}>
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-white font-medium">{name}</h3>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
      <p className="text-gray-400 text-sm truncate">{message}</p>
    </div>
  );
}

export default ChatItem;
