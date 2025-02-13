// In Item.tsx
import React from 'react';

interface ItemProps {
  name: string;
  message: string;
  date: string;
  active?: boolean;
  onClick?: () => void; // Add onClick prop
}

function formatRelativeTime(dateString: string): string {
  const now = Date.now();
  const modifyDate = new Date(dateString.replace(" ", "T") + ":00"); //add seconds to be able to parse
  const diffInSeconds = Math.floor((now - modifyDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  }

  // For dates older than a week, return the original date format.
  return dateString.split(" ")[0]; // Returns YYYY-MM-DD
}

function Item({ name, message, date, active = false, onClick }: ItemProps) {
  const formattedDate = formatRelativeTime(date);

  return (
    <div
      className={`p-3 rounded-md cursor-pointer ${active ? 'bg-[#444791]' : 'hover:bg-[#2f2f2f]'}`}
      onClick={onClick} // Add onClick handler
    >
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-white font-medium">{name}</h3>
        <span className="text-gray-400 text-xs">{formattedDate}</span>
      </div>
      <p className="text-gray-400 text-sm truncate">{message}</p>
    </div>
  );
}

// ... (formatRelativeTime function remains the same)

export default Item;
