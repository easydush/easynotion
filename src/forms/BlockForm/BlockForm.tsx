import { SyntheticEvent, useCallback, useState } from 'react';
import { MediaType, Block, VoidFn } from 'types';
import { Button } from 'components';
import { Switcher } from './components';

type BlockFormProps = {
  type: Exclude<MediaType, MediaType.LINK>;
  onFinish: VoidFn;
  initialData?: Block;
}
export const BlockForm = ({ type, onFinish, initialData }: BlockFormProps) => {
  const [content, setContent] = useState(initialData?.content ?? '');

  const handleFormSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    onFinish(content);
  }, [onFinish, content]);

  return <form onSubmit={handleFormSubmit}>
    <div className='grid grid-cols-1 gap-y-2'>
      <Switcher type={type} onChange={setContent} initialContent={content} />
      <div className='justify-self-start'>
        <Button type='submit' outlined children={initialData?.id ? 'Save' : 'Add'} />
      </div>
    </div>
  </form>;
};

