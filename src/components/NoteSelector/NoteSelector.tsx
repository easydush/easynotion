import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Note, RootState, VoidFn } from 'types';
import { Button } from 'components';
import { FLOWS } from 'constants/flows';
import { activateFlow, deactivateAllFlows } from 'store/actions';
import { noteSelectors } from 'store/selectors';

type NoteSelectorProps = {
  noteId: Note['id'];
  onChange: VoidFn;
  isAddButtonActive?: boolean;
  initialContent?: string;
  parentId?: string;
  title?: string;
};

export const NoteSelector: FC<NoteSelectorProps> = ({
  noteId,
  onChange,
  initialContent,
  parentId,
  title,
  isAddButtonActive = true,
}) => {
  const notes = useSelector<RootState, Note[]>(
    noteSelectors.excludeChildren(noteId),
  );
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(deactivateAllFlows());
    dispatch(activateFlow(FLOWS.CREATE_SUBNOTE));
  }, [dispatch]);

  return (
    <>
      {notes.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {title && <span>{title}:</span>}
          <select
            onChange={onChange}
            defaultValue={parentId ?? initialContent}
            disabled={!!parentId && !initialContent}
            className={`col-span-4 border-2 border-cyan-100 max-w-xl`}
          >
            {notes.map((note) => (
              <option key={note.id} value={note.id}>
                {note.title}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <span>No notes available.</span>
      )}
      {isAddButtonActive && (
        <Button children={'Add new'} onClick={handleClick} />
      )}
    </>
  );
};
