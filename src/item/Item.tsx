// In Item.tsx
    import React from 'react';

    interface ItemProps {
      name: string;
      message: string;
      date: string;
      active?: boolean;
      onClick?: () => void; // Add onClick prop
    }

    function formatDate(dateString: string): string {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }

    function Item({ name, message, date, active = false, onClick }: ItemProps) {
      const formattedDate = formatDate(date);

      return (
        <div
          className={`p-3 rounded-md cursor-pointer ${active ? 'bg-[#444791]' : 'hover:bg-[#2f2f2f]'}`}
          onClick={onClick}
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
