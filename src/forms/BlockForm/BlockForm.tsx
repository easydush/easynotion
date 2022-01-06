import { SyntheticEvent, useState } from 'react';
import { MediaType, Block, VoidFn } from 'types';
import { Switcher } from './components';
import { Button } from 'components';

type BlockFormProps = {
  type: Exclude<MediaType, 'LINK'>;
  onFinish: VoidFn;
  initialData?: Block;
}
export const BlockForm = ({ type, onFinish, initialData }: BlockFormProps) => {
  const [content, setContent] = useState(initialData?.content ?? '');

  function handleFormSubmit(e: SyntheticEvent) {
    e.preventDefault();
    onFinish(content);
  }

  return <form onSubmit={handleFormSubmit}>
    <div className='grid grid-cols-1 gap-y-2'>
      <Switcher type={type} onChange={setContent} initialContent={content} />
      <div className='justify-self-start'>
        <Button type='submit' outlined label={initialData?.id ? 'Save' : 'Add'} size='medium' />
      </div>
    </div>
  </form>;
};

