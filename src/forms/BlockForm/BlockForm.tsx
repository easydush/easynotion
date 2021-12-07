import { useState } from 'react';
import { MediaType, Block, VoidWithArgsFn } from 'types';
import { Switcher } from './components';

type BlockFormProps = {
  type: MediaType;
  onFinish: VoidWithArgsFn;
  initialData?: Block;
}
export const BlockForm = ({ type, onFinish, initialData }: BlockFormProps) => {
  const [content, setContent] = useState(initialData?.content ?? '');

  function handleFormSubmit(e: any) {
    e.preventDefault();
    // TODO: replace order
    onFinish(content);
  }

  return <form onSubmit={handleFormSubmit}>
    <Switcher type={type} onChange={setContent} initialContent={content} />
    <button type='submit'>{initialData?.id ? 'Save' : 'Add'}</button>
  </form>;
};

