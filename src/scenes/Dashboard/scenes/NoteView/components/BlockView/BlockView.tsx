import { Block } from 'types';
import { ReactElement } from 'react';

type BlockProps = {
  block: Block;
  children: ReactElement;
}

export const BlockView = ({ block, children }: BlockProps) => {
  return <div className='rounded-lg outline-dashed outline-offset-4 outline-cyan-100 bg-teal-50 flex flex-row'>
    <div className='basis-96' dangerouslySetInnerHTML={{ __html: block.content }} />
    <div className='basis-4'>{children}</div>
  </div>;
};
