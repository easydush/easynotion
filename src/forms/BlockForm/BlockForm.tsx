import { useState } from 'react';
import { MediaType, Block, VoidWithArgsFn } from 'types';
import { Switcher } from './components';
import { Button } from 'components';

type BlockFormProps = {
  type: Exclude<MediaType, 'LINK'>;
  onFinish: VoidWithArgsFn;
  initialData?: Block;
}
export const BlockForm = ({ type, onFinish, initialData }: BlockFormProps) => {
  const [content, setContent] = useState(initialData?.content ?? '');

  function handleFormSubmit(e: any) {
    e.preventDefault();
    onFinish(content);
  }

  return <form onSubmit={handleFormSubmit}>
    <div className='grid grid-cols-1 gap-y-2'>
      <Switcher type={type} onChange={setContent} initialContent={content} />
      <div className='justify-self-end'>
        <Button type='submit' outlined label={initialData?.id ? 'Save' : 'Add'} size='medium' />
      </div>
    </div>
  </form>;
};

