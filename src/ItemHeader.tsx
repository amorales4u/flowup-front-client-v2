import {useState} from 'react';
    import {PenSquare, File, FileText, List} from 'lucide-react';
    import ItemDetail from "./ItemDetail.tsx";

    interface ItemHeaderProps {
      itemData: {
        name: string;
        description: string;
        date: string;
        time: string;
      } | null;
    }

    function ItemHeader({ itemData }: ItemHeaderProps) {
        const [activeView, setActiveView] = useState<'details' | 'files' | 'notes' | 'log'>('details');

        return (
            <div className="h-16 flex items-center justify-between px-4 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
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
        );
    }

    export default ItemHeader;
