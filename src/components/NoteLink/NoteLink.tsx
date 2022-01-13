import { FC, SyntheticEvent, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Note, TreeItem } from 'types';
import { Icon } from 'components';
import { getNoteUrl } from 'tools';
import { activateFlow, deactivateAllFlows, setCurrentNote } from 'store/actions';
import { FLOWS } from 'constants/flows';


interface NoteLinkProps {
  note: Note | TreeItem;
  isNode?: boolean;
}

export const NoteLink: FC<NoteLinkProps> = ({ note, isNode = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isActive = location.pathname === (note as TreeItem).path;

  const handleMenuItemClick = useCallback(
    () => {
      dispatch(deactivateAllFlows());
      navigate((note as TreeItem)?.path ?? getNoteUrl(note as Note));
    },
    [navigate, note, dispatch],
  );

  const handleAdd = useCallback((e: SyntheticEvent) => {
    e.stopPropagation();
    dispatch(setCurrentNote((note as TreeItem).key));
    dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
  }, [dispatch, note]);

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
