import React, { useCallback } from 'react';
import { Note } from 'types';
import { TreeItem } from 'types/tree';
import { getNoteUrl } from 'tools';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'components';
import { activate } from 'store/actions/ui';
import { FLOWS } from 'constants/flows';
import { useDispatch } from 'react-redux';


interface NoteLinkProps {
  note: Note | TreeItem;
  isActive: boolean;
  isNode: boolean;
}

export const NoteLink = ({ note, isActive, isNode }: NoteLinkProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuItemClick = useCallback(
    () => {
      navigate((note as TreeItem)?.path ?? getNoteUrl(note as Note));
    },
    [navigate, note],
  );

  const handleAdd = useCallback((e) => {
    e.stopPropagation();
    dispatch(activate(FLOWS.CREATE_SUBNOTE));
  }, []);

  return (
    <div
      className={`p-2 flex justify-between rounded-full outline-2 outline-offset-2 outline-cyan-200 
      outline-dotted cursor-pointer ${isActive ? 'bg-teal-100' : 'bg-white'}`}
      onClick={handleMenuItemClick}>
      {note.title}
      {isNode && <span onClick={handleAdd}>
          <Icon type='ADD' />
      </span>}
    </div>
  );
};
