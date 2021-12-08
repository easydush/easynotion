import { useState } from 'react';
import { Note, VoidWithArgsFn } from 'types';
import cuid from 'cuid';

type NoteFormProps = {
  onFinish: VoidWithArgsFn;
  initialData?: Note;
  sectionId?: string;
}
export const NoteForm = ({ onFinish, initialData, sectionId = '0' }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace section id
    onFinish({ title, uri, id: initialData?.id ?? cuid(), sectionId: sectionId });
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

