import { useState, useEffect } from 'react';
import { Edit2, Save, X, Image } from 'lucide-react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import "survey-core/defaultV2.min.css";

interface ItemDetailProps {
  itemData: {
    name: string;
    description: string;
    date: string;
    time: string;
  } | null;
  onSave?: (data: any) => void;
}

function ItemDetail({ itemData, onSave }: ItemDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [survey, setSurvey] = useState<Model | null>(null);
  const [activeView, setActiveView] = useState<'details' | 'chat' | 'files' | 'photos' | 'notes' | 'log'>('details');

  useEffect(() => {
    if (!itemData) return;

    const surveyJson = {
      showNavigationButtons: false,
      showQuestionNumbers: "off",
      mode: isEditing ? "edit" : "display",
      elements: [
        {
          type: "panel",
          name: "meetingDetailsPanel",
          title: "Information",
          elements: [
            {
              type: "text",
              name: "name",
              title: "Name",
              defaultValue: itemData.name,
              isRequired: true,
              readOnly: !isEditing
            },
            {
              type: "comment",
              name: "description",
              title: "Description",
              defaultValue: itemData.description,
              isRequired: true,
              readOnly: !isEditing
            },
            {
              type: "panel",
              name: "dateTimePanel",
              title: "Date and Time",
              elements: [
                {
                  type: "text",
                  name: "date",
                  title: "Date",
                  defaultValue: itemData.date,
                  readOnly: !isEditing,
                  startWithNewLine: false,
                  titleLocation: "left"
                },
                {
                  type: "text",
                  name: "time",
                  title: "Time",
                  defaultValue: itemData.time,
                  readOnly: !isEditing,
                  startWithNewLine: false,
                  titleLocation: "left"
                }
              ],
              showQuestionNumbers: false
            }
          ]
        }
      ]
    };

    const surveyModel = new Model(surveyJson);
    
    // Custom CSS for both edit and display modes
    surveyModel.css = {
      root: 'bg-[#2f2f2f] text-white',
      container: 'max-w-none',
      question: {
        root: 'mb-6',
        title: 'text-gray-400 text-sm font-medium mb-2',
        content: 'mb-4'
      },
      panel: {
        title: 'text-gray-300 text-base font-medium mb-4',
        description: 'text-gray-400 text-sm mb-4',
        content: 'bg-[#1f1f1f] p-6 rounded-lg mb-6'
      },
      text: 'bg-[#2f2f2f] border border-[#444] rounded-md p-2 text-white w-full',
      comment: 'bg-[#2f2f2f] border border-[#444] rounded-md p-2 text-white w-full min-h-[100px]'
    };

    // Additional styling for display mode
    if (!isEditing) {
      surveyModel.css = {
        ...surveyModel.css,
        question: {
          ...surveyModel.css.question,
          root: 'mb-6 bg-[#1f1f1f] rounded-lg p-4',
        }
      };
    }

    // Disable hover effects in display mode
    if (!isEditing) {
      surveyModel.hoverFocus = false;
    }

    setSurvey(surveyModel);
  }, [itemData, isEditing]);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    if (survey) survey.clear(true, true);
  };
  const handleSave = () => {
    if (survey && onSave) onSave(survey.data);
    setIsEditing(false);
  };

  const handleViewChange = (view: 'details' | 'chat' | 'files' | 'photos' | 'notes' | 'log') => {
    setActiveView(view);
    if (isEditing) handleCancel();
  };

  const renderContent = () => {
    if (!itemData) {
      return <p>Loading item details...</p>;
    }

    switch (activeView) {
      case 'details':
        return survey ? <Survey model={survey} /> : null;
      case 'chat':
        return <p>Chat content goes here</p>;
      case 'files':
        return <p>Files content goes here</p>;
      case 'photos':
        return (
          <div>
            <div className="flex items-center justify-center h-48 mb-4 rounded-lg bg-[#1f1f1f]">
              <Image size={48} className="text-gray-400" />
            </div>
            <p className="text-gray-400 text-center">No photos shared in the chat</p>
            <p className="text-gray-400 text-center text-sm">Photos added to chat automatically show up here.</p>
          </div>
        );
      case 'notes':
        return <p>Notes content goes here</p>;
      case 'log':
        return <p>Log content goes here</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#2f2f2f] rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        {!isEditing ? (
          <button 
            onClick={handleEdit} 
            className="inline-flex items-center gap-2 bg-[#444791] text-white px-4 py-2 rounded-md hover:bg-[#5557a5] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#444791] focus:ring-opacity-50"
          >
            <Edit2 size={16} />
            <span>Edit</span>
          </button>
        ) : (
          <div className="flex gap-2">
            <button 
              onClick={handleSave} 
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
            >
              <Save size={16} />
              <span>Save</span>
            </button>
            <button 
              onClick={handleCancel} 
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              <X size={16} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>


      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}

export default ItemDetail;
