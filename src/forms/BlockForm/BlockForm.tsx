import { useState } from 'react';
import { MediaType, VoidWithArgsFn } from 'types';
import { Switcher } from './components';

type BlockFormProps = {
  type: MediaType;
  onFinish: VoidWithArgsFn;
}
export const BlockForm = ({ type, onFinish }: BlockFormProps) => {
  const [content, setContent] = useState('');

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace order
    onFinish(content)
  }

  return <form onSubmit={handleFormSubmit}>
    <Switcher type={type} onChange={setContent} />
    <button type='submit'>Add</button>
  </form>;
};

