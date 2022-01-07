import { useState, SyntheticEvent } from 'react';
import cuid from 'cuid';
import { Note, VoidFn } from 'types';
import { Input } from 'components';
import { normalizeUri } from './tools';

type NoteFormProps = {
  onFinish: VoidFn;
  initialData?: Note;
  parentId?: string;
}

export const NoteForm = ({ onFinish, initialData, parentId }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);

  function handleFormSubmit(event: SyntheticEvent) {
    event.preventDefault();
    onFinish({
      title,
      uri: uri ? normalizeUri(uri) : '',
      id: initialData?.id ?? cuid(),
      parentId: parentId,
    });
  }

  return <form onSubmit={handleFormSubmit}>
    <div className='grid grid-cols-1'>
      <Input
        type='text'
        name='title'
        label='Title'
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type='text'
        name='uri'
        label='URI'
        value={uri}
        onChange={(e) => setUri(e.target.value)}
      />
      <button type='submit' className='justify-self-end'>Save</button>
    </div>
  </form>;
};

