import React from 'react';
import { LogOut, X } from 'lucide-react';

interface LogoutDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function LogoutDialog({ isOpen, onConfirm, onCancel }: LogoutDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onCancel} />
      
      {/* Modal */}
      <div className="relative bg-[#2f2f2f] rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#444]">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-500 bg-opacity-10 rounded-lg">
              <LogOut className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-white">Confirm Logout</h3>
          </div>
          <button
            onClick={onCancel}
            className="p-1 hover:bg-[#444] rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300">
            Are you sure you want to log out? You will need to sign in again to access your account.
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-[#262626]">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-[#444] rounded-md transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutDialog;
