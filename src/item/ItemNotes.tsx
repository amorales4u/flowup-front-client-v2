import React, { useState } from 'react';

interface Note {
  userCreator: string;
  dateCreated: string;
  noteText: string;
}

function ItemNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [userCreator, setUserCreator] = useState('Current User'); // Replace with your actual user data
  const userName = userCreator;

  const handleAddNote = () => {
    if (newNoteText.trim() === '') return;

    const now = new Date();
    const newNote: Note = {
      userCreator: userName,
      dateCreated: now.toISOString().slice(0, 19).replace('T', ' '), // Format: YYYY-MM-DD HH:mm:ss
      noteText: newNoteText.trim(),
    };

    setNotes([...notes, newNote]);
    setNewNoteText('');
  };

  return (
    <div>
      <h3 className="text-white text-lg font-semibold mb-2">Notes</h3>
      <div className="mb-4">
        <textarea
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)}
          placeholder="Add a new note..."
          className="bg-[#2f2f2f] border border-[#444] rounded-md p-2 text-white w-full"
          rows={3}
        />
        <button
          onClick={handleAddNote}
          className="mt-2 px-4 py-2 bg-[#444791] text-white rounded-md hover:bg-[#5557a5] transition-colors duration-200"
        >
          Add Note
        </button>
      </div>
      {notes.map((note, index) => (
        <div key={index} className="bg-[#1f1f1f] rounded-md p-3 mb-2 flex justify-between items-start">
          <div>
            <p className="text-gray-300 text-sm">
              <b>{note.userCreator}</b>
            </p>
            <p className="text-white">{note.noteText}</p>
          </div>
          <span className="text-gray-400 text-xs">{note.dateCreated}</span>
        </div>
      ))}
    </div>
  );
}

export default ItemNotes;
