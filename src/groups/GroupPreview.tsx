import React from 'react';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';

interface GroupPreviewProps {
  groupData: {
    name: string;
    description: string;
  } | null;
  isEditing?: boolean;
}

function GroupPreview({ groupData, isEditing = false }: GroupPreviewProps) {
  if (!groupData) {
    return <p>Loading...</p>;
  }

  const surveyJson = {
    showNavigationButtons: false,
    showQuestionNumbers: "off",
    mode: isEditing ? "edit" : "display",
    elements: [
      {
        type: "panel",
        name: "groupDetailsPanel",
        title: "Information",
        elements: [
          {
            type: "text",
            name: "name",
            title: "Name",
            defaultValue: groupData.name,
            isRequired: true,
            readOnly: !isEditing
          },
          {
            type: "comment",
            name: "description",
            title: "Description",
            defaultValue: groupData.description,
            isRequired: true,
            readOnly: !isEditing
          }
        ]
      }
    ]
  };

  const surveyModel = new Model(surveyJson);

  surveyModel.css = {
    root: 'bg-[#2f2f2f] text-white bg-opacity-10',
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

  return (
    <>
      <div className={`bg-opacity-30 h-full overflow-y-auto flex flex-col`}>
        <Survey model={surveyModel} />
      </div>
    </>
  );
}

export default GroupPreview;