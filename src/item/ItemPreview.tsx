import {Survey} from 'survey-react-ui';
import {Model} from 'survey-core';

interface ItemPreviewProps {
    itemData: {
        name: string;
        description: string;
        date: string;
        time: string;
    } | null;
    isEditing?: boolean; // Add isEditing prop
}

function ItemPreview({itemData, isEditing = false}: ItemPreviewProps) {
    if (!itemData) {
        return <p>Loading...</p>;
    }

    // Define the survey JSON (hardcoded for this example)
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
        root: 'bg-[#2f2f2f] text-white  bg-opacity-10',
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
                <Survey model={surveyModel}/>
            </div>
        </>
    );
}

export default ItemPreview;
