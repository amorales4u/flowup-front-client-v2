import React, { useState } from 'react';
import { User, Trash2, UploadCloud } from 'lucide-react';

interface Attachment {
  fileName: string;
  fileSize: number;
  userLoader: string;
  dateUploaded: string;
}

function ItemAttachments() {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [userName, setUserName] = useState('Current User'); // Replace with your actual user data

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const fileSize = file.size; // in bytes
    const fileName = file.name;
    const now = new Date();

    const newAttachment: Attachment = {
      fileName,
      fileSize,
      userLoader: userName,
      dateUploaded: now.toISOString().slice(0, 19).replace('T', ' '), // Format: YYYY-MM-DD HH:mm:ss
    };

    setAttachments([...attachments, newAttachment]);
    // Clear the input
    event.target.value = '';
  };

  const handleDeleteAttachment = (index: number) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  return (

      <>
        <h3 className="text-white text-lg font-semibold mb-2 " >Attachments</h3>
        <div className={`bg-opacity-30 h-full overflow-y-auto flex flex-col`}>
      <div className="mb-4">
        <label
          htmlFor="fileUpload"
          className="inline-flex items-center px-4 py-2 bg-[#444791] text-white rounded-md hover:bg-[#5557a5] transition-colors duration-200 cursor-pointer"
        >
          <UploadCloud className="mr-2" size={20} />
          Upload File
        </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div className="space-y-2">
        {attachments.map((attachment, index) => (
          <div key={index} className="bg-[#1f1f1f] rounded-md p-3 flex items-center justify-between">
            <div>
              <p className="text-white text-sm">{attachment.fileName}</p>
              <p className="text-gray-400 text-xs">
                Uploaded by <b>{attachment.userLoader}</b> on {attachment.dateUploaded}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-xs">{ (attachment.fileSize / 1024).toFixed(2) } KB</span>
              <button
                onClick={() => handleDeleteAttachment(index)}
                className="text-red-500 hover:text-red-600"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
  );
}

export default ItemAttachments;
