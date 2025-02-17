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
      const [name, setName] = useState(itemData?.name || '');
      const [description, setDescription] = useState(itemData?.description || '');
      const [isEditing, setIsEditing] = useState(false);
      const [survey, setSurvey] = useState<Model | null>(null);
      const [activeView, setActiveView] = useState<'details' | 'chat' | 'files' | 'photos' | 'notes' | 'log'>('details');

      useEffect(() => {
        if (!itemData) return;

        const surveyJson = {
          showNavigationButtons: false,
          showQuestionNumbers: "off",
          mode: "display",
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
                  readOnly: true
                },
                {
                  type: "comment",
                  name: "description",
                  title: "Description",
                  defaultValue: itemData.description,
                  isRequired: true,
                  readOnly: true
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
                      readOnly: true,
                      startWithNewLine: false,
                      titleLocation: "left"
                    },
                    {
                      type: "text",
                      name: "time",
                      title: "Time",
                      defaultValue: itemData.time,
                      readOnly: true,
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
          root: 'text-white bg-opacity-20', // Apply transparency here
          container: 'max-w-none ',
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
        if (true) {
          surveyModel.css = {
            ...surveyModel.css,
            question: {
              ...surveyModel.css.question,
              root: 'mb-6 bg-[#1f1f1f] rounded-lg p-4',
            }
          };
        }

        // Disable hover effects in display mode
        if (true) {
          surveyModel.hoverFocus = false;
        }

        setSurvey(surveyModel);
      }, [itemData]);

      useEffect(() => {
        if (itemData) {
          setName(itemData.name || '');
          setDescription(itemData.description || '');
        }
      }, [itemData]);

      const renderContent = () => {
        if (!itemData) {
          return <p>Loading item details...</p>;
        }

        return (
          <div className="overflow-y-auto h-[400px]">
            {survey && <Survey model={survey} />}
          </div>
        );
      };

      return (
        <div className="bg-[#2f2f2f] rounded-lg shadow-lg p-6 bg-opacity-30 h-full">
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
                readOnly={true}
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
                readOnly={true}
              />
            </div>
          </div>

          {renderContent()}
        </div>
      );
    }

    export default ItemDetail;
