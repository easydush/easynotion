import { useState } from 'react';
import { VoidWithArgsFn } from 'types';
import cuid from 'cuid';

type SectionFormProps = {
  onFinish: VoidWithArgsFn;
}
export const SectionForm = ({ onFinish }: SectionFormProps) => {
  const [title, setTitle] = useState('');

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace section id
    onFinish({ title, id: cuid()});
    setTitle('')
  }

  return <form onSubmit={handleFormSubmit}>
    <div>Title:</div>
    <input
      type='text'
      name='title'
      required
      onChange={(e) => setTitle(e.target.value)}
    />
    <button type='submit'>Add</button>
  </form>;
};

