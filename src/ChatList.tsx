import React from 'react';
import { Menu, Search } from 'lucide-react';
import ChatItem from './ChatItem';

function ChatList() {
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
                <ChatItem
                    name="Sesión De Dudas"
                    message="You: New event created: Sesión..."
                    date="11/30/2024"
                    active={true}
                />
                <ChatItem
                    name="Demo Portal"
                    message="You: New event created: Demo..."
                    date="11/29/2024"
                />
                <ChatItem
                    name="Demo IAPSA"
                    message="You: New event created: Demo I..."
                    date="11/15/2024"
                />
            </div>
        </div>
    );
}

export default ChatList;
