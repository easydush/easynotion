import { useState } from 'react';
import { Note, VoidWithArgsFn } from 'types';
import cuid from 'cuid';
import { Input } from '../../components/Input';

type NoteFormProps = {
  onFinish: VoidWithArgsFn;
  initialData?: Note;
  parentId?: string;
}
export const NoteForm = ({ onFinish, initialData, parentId }: NoteFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [uri, setUri] = useState(initialData?.uri);

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
    <div className='grid grid-cols-1'>
    <Input
      type='text'
      name='title'
      label='Title'
      required
      onChange={(e) => setTitle(e.target.value)}
    />
    <Input
      type='text'
      name='uri'
      label='URI'
      onChange={(e) => setUri(e.target.value)}
    />
    <button type='submit' className='justify-self-end'>Add</button></div>
  </form>;
};

