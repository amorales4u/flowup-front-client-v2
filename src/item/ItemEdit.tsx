import React, { useState, useEffect } from 'react';
    import { Survey } from 'survey-react-ui';
    import { Model } from 'survey-core';

    interface ItemEditProps {
      itemData: {
        name: string;
        description: string;
        date: string;
        time: string;
      } | null;
      onSave: (newName: string, newDescription: string) => void;
      onCancel: () => void;
    }

    function ItemEdit({ itemData, onSave, onCancel }: ItemEditProps) {
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');

      useEffect(() => {
        if (itemData) {
          setName(itemData.name);
          setDescription(itemData.description);
        }
      }, [itemData]);

      const handleSaveClick = () => {
        onSave(name, description);
      };

      if (!itemData) {
        return <p>Loading...</p>;
      }

      return (
        <>
          <div className="space-y-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#1f1f1f] border border-[#444] rounded-md p-2 text-white w-full"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-400">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-[#1f1f1f] border border-[#444] rounded-md p-2 text-white w-full"
              />
            </div>
          </div>
        </>
      );
    }

    export default ItemEdit;
