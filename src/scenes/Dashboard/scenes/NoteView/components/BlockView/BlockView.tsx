import { Block } from 'types';
import React, { ReactElement } from 'react';

import styles from './BlockView.module.scss';
import { Video, Image } from 'components';

type BlockProps = {
  block: Block;
  children: ReactElement;
}

export const BlockView = ({ block, children }: BlockProps) => {
  const isMedia =  ['IMAGE', 'VIDEO'].includes(block.type)

  return <div
    className={`${styles.block} rounded-lg outline-dashed outline-offset-4 outline-cyan-100 bg-teal-50 flex flex-row `}>
    {
      isMedia ? <div className='basis-96 m-4 truncate'>
      {block.type === 'IMAGE' ?
          <Image src={block.content} alt={'image'} />:
          <Video src={block.content} />}
        </div> :
        <div className='basis-96 m-4 truncate' dangerouslySetInnerHTML={{ __html: block.content }} />
    }
    <div className='basis-4'>{children}</div>
  </div>;
};
