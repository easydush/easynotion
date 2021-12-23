import React, { useCallback } from 'react';
import { Note } from 'types';
import { TreeItem } from 'types/tree';
import { getNoteUrl } from '../../tools';
import { useHistory } from 'react-router-dom';


interface NoteLinkProps {
  note: Note | TreeItem;
  isActive: boolean;
}

export const NoteLink = ({ note, isActive }: NoteLinkProps) => {
  const history = useHistory();

  const handleMenuItemClick = useCallback(
    () => {
      history.push((note as TreeItem)?.path ?? getNoteUrl(note as Note));
    },
    [history, note],
  );

  return (
    <div
      className={`p-2 rounded-full outline-2 outline-offset-2 outline-cyan-200 
      outline-dotted cursor-pointer ${isActive ? 'bg-teal-100' : 'bg-white'}`}
      onClick={handleMenuItemClick}>
      {note.title}
    </div>
  );
};
