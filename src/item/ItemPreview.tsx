import React from 'react';
    import { Edit2 } from 'lucide-react';
    import { Survey } from 'survey-react-ui';

    interface ItemPreviewProps {
      itemData: {
        name: string;
        description: string;
        date: string;
        time: string;
      } | null;
    }

    function ItemPreview({ itemData }: ItemPreviewProps) {
      if (!itemData) {
        return <p>Loading...</p>;
      }

      return (
        <>
          <div className="flex items-center justify-between mb-4">
              Hi!!! I'm the ItemPreview component
          </div>
        </>
      );
    }

    export default ItemPreview;
