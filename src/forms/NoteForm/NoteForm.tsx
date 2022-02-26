import { useState, SyntheticEvent, useCallback, useEffect } from 'react';
import cuid from 'cuid';
import { Note, RootState, VoidFn } from 'types';
import { Button, Input, NoteSelector } from 'components';
import { normalizeUri } from './tools';
import { useSelector } from 'react-redux';
import { noteSelectors } from '../../store/selectors';

type NoteFormProps = {
  onFinish: VoidFn;
  onCancel: VoidFn;
  initialData?: Note;
  parentId?: string;
};

export const NoteForm = ({
                           onFinish,
                           onCancel,
                           initialData,
                           parentId,
                         }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);
  const [parent, setParent] = useState(initialData?.parentId);
  const [isValid, setValid] = useState(true);


  const uris = useSelector<RootState, Note[]>(noteSelectors.all).map(note => note.uri);

  useEffect(() => setValid(uri === initialData?.uri || !uris.includes(normalizeUri(uri ?? ''))),
    [initialData?.uri, uri, uris],
  );

  const handleFormSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      if (isValid)
        onFinish({
          title,
          uri: uri ? normalizeUri(uri) : '',
          id: initialData?.id ?? cuid(),
          parentId: parentId ?? parent,
        });
    },
    [isValid, onFinish, uri, initialData, parentId, title, parent],
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-span-6 '>
          <Input
            type='text'
            name='title'
            title='Title'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='col-span-6'>
          <Input
            type='text'
            name='uri'
            title='URI'
            value={uri}
            onChange={(e) => setUri(e.target.value)}
          />
        </div>
        <div className='col-span-6'>
          <NoteSelector
            noteId={initialData?.id ?? ''}
            initialContent={initialData?.id}
            onChange={(e) => setParent(e.target.value)}
            isAddButtonActive={false}
            parentId={initialData?.parentId ?? parentId}
            title='Parent'
          />
        </div>
        {!isValid &&
        <div className='col-span-6 text-red-300'>
          URI should be unique
        </div>
        }
        <div className='col-start-2 col-end-3'>
          <Button outlined secondary children={'Cancel'} onClick={onCancel} />
        </div>
        <div className='col-end-7 col-span-2'>
          <Button type='submit' outlined children={'Save'} />
        </div>
      </div>
    </form>
  );
};
