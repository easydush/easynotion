import { useState, SyntheticEvent, useCallback } from 'react';
import cuid from 'cuid';
import { Note, VoidFn } from 'types';
import { Button, Input, NoteSelector } from 'components';
import { normalizeUri } from './tools';

type NoteFormProps = {
  onFinish: VoidFn;
  onCancel: VoidFn;
  initialData?: Note;
  parentId?: string;
}

export const NoteForm = ({ onFinish, onCancel, initialData, parentId }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);
  const [parent, setParent] = useState(initialData?.parentId);

  const handleFormSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    onFinish({
      title,
      uri: uri ? normalizeUri(uri) : '',
      id: initialData?.id ?? cuid(),
      parentId: parentId ?? parent,
    });
  }, [onFinish, uri, initialData, parentId, title, parent]);

  return <form onSubmit={handleFormSubmit}>
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
      <div className='col-start-2 col-end-3'>
        <Button type='submit' outlined children={'Save'} />
      </div>
      <div className='col-end-7 col-span-2'>
        <Button outlined children={'Cancel'} onClick={onCancel} />
      </div>
    </div>
  </form>;
};

