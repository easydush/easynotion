import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Note, RootState } from 'types';
import { Button, Icon, ToggleSwitch } from 'components';
import { FLOWS } from 'constants/flows';
import {
  activateFlow,
  removeNote,
  removeBlock,
  removeAllBlocksByNoteId,
  deactivateAllFlows,
  clearCurrentNote,
} from 'store/actions';
import { noteSelectors, uiSelectors } from 'store/selectors';

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  const note = useSelector<RootState, Note | null>(noteSelectors.current);
  const notes = useSelector<RootState, Note[]>(noteSelectors.all);

  const navigate = useNavigate();

  const activeFlows = useSelector<RootState, FLOWS[]>(uiSelectors.all);

  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  if (!title && note) {
    title = note?.title;
  }

  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(activateFlow(FLOWS.EDIT_NOTE));
  }, [dispatch]);

  const handleDelete = useCallback(() => {
    if (note) {
      dispatch(removeBlock(note.id));
      dispatch(removeAllBlocksByNoteId(note.id));
      dispatch(removeNote(note.id));
      dispatch(clearCurrentNote());
      navigate('');
    }
  }, [dispatch, note]);

  const handleToggle = useCallback(() => {
    isControlsActive
      ? dispatch(deactivateAllFlows())
      : dispatch(activateFlow(FLOWS.SHOW_CONTROLS));
  }, [dispatch, isControlsActive]);

  return (
    <div className="flex justify-between items-center py-4 pl-24 border-b-2 border-gray-100">
      {!!title ? (
        <>
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h1 className="text-3xl text-gray">{title}</h1>
          </div>
          {isControlsActive && (
            <>
              <div className="px-2">
                <Button onClick={handleEdit} title="Edit note">
                  <Icon type="EDIT" />
                </Button>
              </div>
              <div className="px-2">
                <Button onClick={handleDelete} title="Delete note">
                  <Icon type="DELETE" />
                </Button>
              </div>
            </>
          )}
          <div className="px-2">Switch mode</div>
          <div className="px-2">
            <ToggleSwitch value={isControlsActive} onToggle={handleToggle} />
          </div>
        </>
      ) : (
        <h1 className="text-3xl text-gray-700">
          {notes.length === 0
            ? 'Create a note to start'
            : 'Select a note from menu'}
        </h1>
      )}
    </div>
  );
};
