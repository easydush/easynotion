import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Note, TreeItem } from 'types';
import { Icon } from 'components';
import { getNoteUrl } from 'tools';
import { activateFlow, deactivateAllFlows } from 'store/actions';
import { FLOWS } from 'constants/flows';


interface NoteLinkProps {
  note: Note | TreeItem;
  isNode?: boolean;
}

export const NoteLink = ({ note, isNode = false }: NoteLinkProps) => {
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

  const handleAdd = useCallback((e) => {
    e.stopPropagation();
    dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
  }, [dispatch]);

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
