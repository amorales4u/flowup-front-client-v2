import React, { useState } from 'react';
import { PenSquare, File, FileText, List, Check, X, Info } from 'lucide-react';
import GroupPreview from './GroupPreview';

interface GroupAppProps {
  groupData: {
    name: string;
    description: string;
  } | null;
  onViewChange: (view: 'preview' | 'edit' | 'attachments' | 'notes' | 'log') => void;
  activeView: 'preview' | 'edit' | 'attachments' | 'notes' | 'log';
  onSave?: (name: string, description: string) => void;
  onCancel?: () => void;
}

function GroupApp({ groupData, onViewChange, onSave, onCancel }: GroupAppProps) {
  const [activeView, setActiveView] = useState<'preview' | 'edit' | 'attachments' | 'notes' | 'log'>('preview');
  const [name, setName] = useState(groupData?.name || '');
  const [description, setDescription] = useState(groupData?.description || '');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEditClick = () => {
    if (activeView === 'edit') {
      setActiveView('preview');
    } else {
      setActiveView('edit');
    }
  };

  const handleDataClick = () => {
    if (activeView === 'preview') {
      return;
    }
    setActiveView('preview');
  };

  const handleSaveClick = () => {
    if (onSave && groupData) {
      onSave(name, description);
    }
    setActiveView('preview');
  };

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmCancel = () => {
    setShowConfirmation(false);
    setActiveView('preview');
    if (onCancel) {
      onCancel();
    }
  };

  const handleDismissCancel = () => {
    setShowConfirmation(false);
  };

  if (!groupData) {
    return null;
  }

  return (
    <>
      <div className="h-16 flex items-center justify-between px-4 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
        <div className="flex items-center space-x-4">
          <h1 className="text-white text-lg font-semibold">{groupData?.name}</h1>
          <h1 className="text-white text-lg font-semibold">{'-'}</h1>
          <h4 className="text-gray-300 text-sm">{groupData?.description}</h4>
        </div>
        <div className="flex items-center space-x-4">
          {activeView === 'edit' ? (
            <>
              <button
                onClick={handleSaveClick}
                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                title="Save"
              >
                <Check size={20} />
                <span className="ml-2">Save</span>
              </button>
              <button
                onClick={handleCancelClick}
                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                title="Discard changes"
              >
                <X size={20} />
                <span className="ml-2">Cancel</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEditClick}
                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                title="Edit"
              >
                <PenSquare size={20} />
                <span className="ml-2">Edit</span>
              </button>
              <button
                onClick={handleDataClick}
                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                title="Data"
              >
                <Info size={20} />
                <span className="ml-2">Data</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-opacity-10 rounded-lg shadow-lg p-6 h-full overflow-y-auto flex flex-col">
        <div className="flex space-x-4 mb-4">
          <div className="w-[300px]">
            <label htmlFor="name" className="block text-sm font-medium text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={groupData?.name}
              readOnly
              className="bg-[#1f1f1f] border border-[#444] rounded-md p-2 text-white w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="description" className="block text-sm font-medium text-gray-400">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={groupData?.description}
              readOnly
              className="bg-[#1f1f1f] border border-[#444] rounded-md p-2 text-white w-full"
            />
          </div>
        </div>

        <GroupPreview groupData={groupData} isEditing={activeView === 'edit'} />
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleDismissCancel} />

          <div className="relative bg-[#2f2f2f] rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
            <div className="p-6">
              <p className="text-white">Are you sure you want to cancel? All changes will be lost.</p>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#262626]">
              <button
                onClick={handleDismissCancel}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-[#444] rounded-md transition-colors duration-200"
              >
                No, continue editing
              </button>
              <button
                onClick={handleConfirmCancel}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
              >
                Yes, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GroupApp;