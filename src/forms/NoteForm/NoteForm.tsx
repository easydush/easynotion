import { useState } from 'react';
import { Note, VoidWithArgsFn } from 'types';
import cuid from 'cuid';

type NoteFormProps = {
  onFinish: VoidWithArgsFn;
  initialData?: Note;
  parentId?: string;
}
export const NoteForm = ({ onFinish, initialData, parentId }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);
  console.log(parentId);
  function handleFormSubmit(e: any) {
    e.preventDefault();
    onFinish({
      title,
      uri: uri?.replace(/[^a-zA-Z0-9]/g, '_').replace(/_{2,}/g, '_'),
      id: initialData?.id ?? cuid(),
      parentId: parentId,
    });
  }

  return <form onSubmit={handleFormSubmit}>
    <div>Title:</div>
    <input
      type='text'
      name='title'
      required
      onChange={(e) => setTitle(e.target.value)}
    />
    <div>URI:</div>
    <input
      type='text'
      name='uri'
      onChange={(e) => setUri(e.target.value)}
    />
    <button type='submit'>Add</button>
  </form>;
};

