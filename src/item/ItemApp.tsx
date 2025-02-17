import React, {useState} from 'react';
import {PenSquare, File, FileText, List, Check, X, Info} from 'lucide-react';
import ItemNotes from './ItemNotes';
import ItemAttachments from './ItemAttachments';
import ItemLog from './ItemLog';
import ItemPreview from './ItemPreview';

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
        if (onCancel) {
            onCancel();
        }
        setActiveView('preview');
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
                                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                                title="Save"
                            >
                                <Check size={20}/>
                            </button>
                            <button
                                onClick={handleCancelClick}
                                className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                                title="Discard changes"
                            >
                                <X size={20}/>
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

            <div className="bg-[#2f2f2f] rounded-lg shadow-lg p-6 bg-opacity-30 h-full">
                {activeView === 'notes' && <ItemNotes userName={userName} />}
                {activeView === 'attachments' && <ItemAttachments />}
                {activeView === 'log' && <ItemLog />}
                {activeView === 'preview'  && <ItemPreview itemData={itemData} />}
            </div>
        </>
    );
}

export default ItemApp;
