import React from 'react';
import { Plus, Smile, Paperclip, Send } from 'lucide-react';

function ChatInput() {
  return (
    <div className="h-20 border-t border-[#2f2f2f] px-4 py-3">
      <div className="bg-[#292929] rounded-lg p-3 flex items-center space-x-3">
        <Plus className="text-gray-400 cursor-pointer" size={20} />
        <input
          type="text"
          placeholder="Type a message"
          className="bg-transparent text-white flex-1 outline-none"
        />
        <div className="flex items-center space-x-3">
          <Smile className="text-gray-400 cursor-pointer" size={20} />
          <Paperclip className="text-gray-400 cursor-pointer" size={20} />
          <Send className="text-gray-400 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
