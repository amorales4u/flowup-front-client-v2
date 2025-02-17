import React from 'react';

interface LogEntry {
    userModifier: string;
    dateModified: string;
    typeModified: 'debug' | 'info' | 'warning' | 'error';
    message: string;
}

function ItemLog() {
    const logEntries: LogEntry[] = [
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:00:00',
            typeModified: 'info',
            message: 'Item created',
        },
        {
            userModifier: 'User1',
            dateModified: '2024-02-27 10:15:00',
            typeModified: 'warning',
            message: 'Description updated',
        },
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:30:00',
            typeModified: 'error',
            message: 'Attachment failed to upload',
        },
        {
            userModifier: 'User2',
            dateModified: '2024-02-27 11:00:00',
            typeModified: 'debug',
            message: 'User logged in',
        },
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:30:00',
            typeModified: 'error',
            message: 'Attachment failed to upload',
        },
        {
            userModifier: 'User2',
            dateModified: '2024-02-27 11:00:00',
            typeModified: 'debug',
            message: 'User logged in',
        },
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:30:00',
            typeModified: 'error',
            message: 'Attachment failed to upload',
        },
        {
            userModifier: 'User2',
            dateModified: '2024-02-27 11:00:00',
            typeModified: 'debug',
            message: 'User logged in',
        },
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:30:00',
            typeModified: 'error',
            message: 'Attachment failed to upload',
        },
        {
            userModifier: 'User2',
            dateModified: '2024-02-27 11:00:00',
            typeModified: 'debug',
            message: 'User logged in',
        },
        {
            userModifier: 'Admin',
            dateModified: '2024-02-27 10:30:00',
            typeModified: 'error',
            message: 'Attachment failed to upload',
        },
        {
            userModifier: 'User2',
            dateModified: '2024-02-27 11:00:00',
            typeModified: 'debug',
            message: 'User logged in',
        },
    ];

    const getTypeColor = (type: LogEntry['typeModified']) => {
        switch (type) {
            case 'debug':
                return 'text-gray-400';
            case 'info':
                return 'text-blue-400';
            case 'warning':
                return 'text-yellow-400';
            case 'error':
                return 'text-red-400';
            default:
                return 'text-gray-400';
        }
    };

    return (
        <>
            <h3 className="text-white text-lg font-semibold mb-2 ">Log</h3>
            <div className={`bg-opacity-30 h-full overflow-y-auto flex flex-col`}>

                <div className="space-y-2">
                    {logEntries.map((entry, index) => (
                        <div key={index} className="bg-[#1f1f1f] rounded-md p-3">
                            <p className={`text-sm ${getTypeColor(entry.typeModified)}`}>
                                [{entry.dateModified}]
                                - <b>{entry.userModifier}</b> - {entry.typeModified.toUpperCase()}
                            </p>
                            <p className="text-white text-sm">{entry.message}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemLog;
