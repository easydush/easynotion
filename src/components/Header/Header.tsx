import { useDispatch, useSelector } from 'react-redux';
import { Note, RootState } from 'types';
import { Button, Icon } from 'components';
import { FLOWS } from 'constants/flows';
import {
  activateFlow,
  removeNote,
  removeBlock,
  removeAllBlocksByNoteId,
  deactivateAllFlows,
} from 'store/actions';
import { noteSelectors, uiSelectors } from 'store/selectors';

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  const note = useSelector<RootState, Note | null>(noteSelectors.current);

  const activeFlows = useSelector<RootState, string[]>(uiSelectors.all);

  const isControlsActive = activeFlows.includes(FLOWS.SHOW_CONTROLS);

  if (!title && note) {
    title = note?.title;
  }

  const dispatch = useDispatch();

  const handleActivateControls = () => {
    dispatch(activateFlow(FLOWS.SHOW_CONTROLS));
  };

  const handleSave = () => {
    dispatch(deactivateAllFlows());
  };

  const handleEdit = () => {
    dispatch(activateFlow(FLOWS.EDIT_NOTE));
  };

  const handleDelete = () => {
    if (note) {
      dispatch(removeBlock(note.id));
      dispatch(removeAllBlocksByNoteId(note.id));
      dispatch(removeNote(note.id));
    }
  };

  return <div
    className='flex justify-between items-center py-4 pl-4 border-b-2 border-gray-100'>
    {!!title ? (
        <>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <h1 className='text-3xl text-gray'>{title}</h1>
          </div>
          {isControlsActive ?
            <>
              <div className='px-4'>
                <Button onClick={handleSave}>
                  <Icon type='SAVE' />
                </Button>
              </div>
              <div className='px-4'>
                <Button onClick={handleEdit}>
                  <Icon type='EDIT' />
                </Button>
              </div>
              <div className='px-4'>
                <Button onClick={handleDelete}>
                  <Icon type='DELETE' />
                </Button>
              </div>
            </> :
            <div className='px-4'>
              <Button onClick={handleActivateControls}>
                <Icon type='EDIT_NOTE' />
              </Button>
            </div>
          }
        </>) :
      <h1 className='text-3xl text-gray-700'>
        Click on menu or create a new note
      </h1>
    }
  </div>;
};
