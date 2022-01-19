import { SyntheticEvent, useCallback, useState } from 'react';
import { MediaType, Block, VoidFn } from 'types';
import { Button } from 'components';
import { Switcher } from './components';

type BlockFormProps = {
  type: Exclude<MediaType, MediaType.LINK>;
  onFinish: VoidFn;
  onCancel: VoidFn;
  initialData?: Block;
}
export const BlockForm = ({ type, onFinish, onCancel, initialData }: BlockFormProps) => {
  const [content, setContent] = useState(initialData?.content);

  const handleFormSubmit = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    onFinish(content);
  }, [onFinish, content]);

  return <form onSubmit={handleFormSubmit}>
    <div className='grid grid-cols-1 gap-y-2'>
      <Switcher type={type} onChange={setContent} initialContent={content} />
      <div className='flex justify-start space-x-4'>
        <Button type='submit' outlined children={'Save'} />
        <Button outlined children={'Cancel'} onClick={onCancel} />
      </div>
    </div>
  </form>;
};

