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
      <div className="grid grid-cols-5 gap-6">
        {title && <span>{title}:</span>}
        {notes.length > 0 ? (
          <select
            onChange={onChange}
            defaultValue={''}
            value={parentId ?? initialContent}
            disabled={!!parentId && !initialContent}
            className={`col-span-4 border-2 border-cyan-100 max-w-xl`}
          >
            <option key="None" value={undefined} />
            {notes.map((note) => (
              <option key={note.id} value={note.id}>
                {note.title}
              </option>
            ))}
          </select>
        ) : (
          <span className={`col-span-4 max-w-xl`}>No notes available.</span>
        )}
      </div>
      {isAddButtonActive && (
        <Button children={'Add new'} onClick={handleClick} />
      )}
    </>
  );
};
