import React, {useState} from 'react';
import {PenSquare, File, FileText, List, Check, X, Info} from 'lucide-react';
import ItemNotes from './ItemNotes';
import ItemAttachments from './ItemAttachments';
import ItemLog from './ItemLog';
import ItemPreview from './ItemPreview';
import ItemEdit from './ItemEdit';

interface ItemHeaderProps {
    itemData: {
        name: string;
        description: string;
        date: string;
        time: string;
    } | null;
    onViewChange: (view: 'preview' | 'edit' | 'attachments' | 'notes' | 'log') => void;
    activeView: 'preview' | 'edit' | 'attachments' | 'notes' | 'log';
    onSave?: (name: string, description: string) => void;
    onCancel?: () => void;
}

function ItemApp({itemData, onViewChange,  onSave, onCancel}: ItemHeaderProps) {
    const [activeView, setActiveView] = useState<'preview' | 'edit' | 'attachments' | 'notes' | 'log'>('preview');
    const [name, setName] = useState(itemData?.name || '');
    const [description, setDescription] = useState(itemData?.description || '');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [userName, setUserName] = useState('Current User'); // Replace with your actual user data

    const handleEditClick = () => {
        if( activeView === 'edit') {
            setActiveView('preview');
        } else {
            setActiveView('edit');
        }
    };

    const handleDataClick = () => {
        if( activeView === 'preview') {
            return;
            }
        setActiveView('preview');
    };

    const handleAttachmentsClick = () => {
        if( activeView === 'attachments') {
            setActiveView('preview');
        } else {
            setActiveView('attachments');
        }

    };

    const handleNotesClick = () => {
        if( activeView === 'notes') {
            setActiveView('preview');
        } else {
            setActiveView('notes');
        }
    };

    const handleLogClick = () => {
        if( activeView === 'log') {
            setActiveView('preview');
        } else {
            setActiveView('log');
        }
    };

    const handleSaveClick = () => {
        if (onSave && itemData) {
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

    if (!itemData) {
        return null;
    }

    return (
        <>
            <div className="h-16 flex items-center justify-between px-4 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
                <div className="flex items-center space-x-4">
                    <h1 className="text-white text-lg font-semibold">{itemData?.name}</h1>
                    <h1 className="text-white text-lg font-semibold">{"-"}</h1>
                    <h4 className="text-gray-300 text-sm">{itemData?.description}</h4>
                </div>
                <div className="flex items-center space-x-4">
                    {activeView === 'edit' ? (
                        <>
                            <button
                                onClick={handleSaveClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Save"
                            >
                                <Check size={20}/>
                                <span className="ml-2">Save</span>
                            </button>
                            <button
                                onClick={handleCancelClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Discard changes"
                            >
                                <X size={20}/>
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
                                <PenSquare size={20}/>
                                <span className="ml-2">Edit</span>
                            </button>
                            <button
                                onClick={handleDataClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Data"
                            >
                                <Info size={20}/>
                                <span className="ml-2">Data</span>
                            </button>
                            <button
                                onClick={handleAttachmentsClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Attachments"
                            >
                                <File size={20}/>
                                <span className="ml-2">Attachments</span>
                            </button>
                            <button
                                onClick={handleNotesClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Notas"
                            >
                                <FileText size={20}/>
                                <span className="ml-2">Notes</span>
                            </button>
                            <button
                                onClick={handleLogClick}
                                className={`inline-flex items-center text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors`}
                                title="Log"
                            >
                                <List size={20}/>
                                <span className="ml-2">Log</span>
                            </button>
                        </>
                    )}
                </div>
            </div>

            <div className="bg-opacity-10 rounded-lg shadow-lg p-6 h-full overflow-y-auto flex flex-col">
                <div className="flex space-x-4 mb-4 ">
                    <div className="w-[300px]">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={itemData?.name}
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
                            value={itemData?.description}
                            readOnly
                            className="bg-[#1f1f1f] border border-[#444] rounded-md p-2 text-white w-full"
                        />
                    </div>
                </div>
                {activeView === 'edit' && (
                    <ItemEdit
                        itemData={itemData}
                        onSave={onSave}
                        onCancel={handleCancelClick}
                    />
                )}
                {activeView === 'notes' && <ItemNotes userName={userName} />}
                {activeView === 'attachments' && <ItemAttachments />}
                {activeView === 'log' && <ItemLog />}
                {activeView === 'preview' && <ItemPreview itemData={itemData} isEditing={activeView === 'edit'} />}
            </div>

            {/* Confirmation Dialog */}
            {showConfirmation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleDismissCancel} />

                    {/* Modal */}
                    <div className="relative bg-[#2f2f2f] rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
                        {/* Content */}
                        <div className="p-6">
                            <p className="text-white">Are you sure you want to cancel? All changes will be lost.</p>
                        </div>

                        {/* Footer */}
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

export default ItemApp;
