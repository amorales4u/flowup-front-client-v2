import {useState} from 'react';
import {PenSquare, File, FileText, List} from 'lucide-react';
import ItemDetail from "./ItemDetail.tsx";

function ItemHeader({ itemData, onSave }: ItemDetailProps) {
    const [activeView, setActiveView] = useState<'details' | 'files' | 'notes' | 'log'>('details');

    return (
        <div className="flex-1 flex flex-col">
            <div className="h-16 border-b border-[#2f2f2f] flex items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <h1 className="text-white text-lg font-semibold">{itemData?.name}</h1>
                    <h1 className="text-white text-lg font-semibold">{ "-" }</h1>
                    <h4 className="text-white text-lg font-semibold">{itemData?.description}</h4>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        className={`text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors ${activeView === 'files' ? 'bg-[#444791] text-white' : ''}`}
                        title="Edit"
                    >
                        <PenSquare size={20}/>
                    </button>
                    <button
                        className={`text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors ${activeView === 'files' ? 'bg-[#444791] text-white' : ''}`}
                        title="Attachments"
                    >
                        <File size={20}/>
                    </button>
                    <button
                        className={`text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors ${activeView === 'files' ? 'bg-[#444791] text-white' : ''}`}
                        title="Notas"
                    >
                        <FileText size={20}/>
                    </button>
                    <button
                        className={`text-gray-400 hover:text-white focus:text-white p-2 rounded-md hover:bg-[#444791] transition-colors ${activeView === 'files' ? 'bg-[#444791] text-white' : ''}`}
                        title="Log"
                    >
                        <List size={20}/>
                    </button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto  p-6">
            <ItemDetail
                itemData={itemData}
            />
        </div>
    </div>
    );
}

export default ItemHeader;
