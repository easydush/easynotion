import { Block, Note, RootState } from 'types';
import React, { ReactElement } from 'react';

import styles from './BlockView.module.scss';
import { Video, Image, NoteLink } from 'components';
import { useSelector } from 'react-redux';
import { noteSelectors } from 'store/selectors';

type BlockProps = {
  block: Block;
  children: ReactElement;
}

export const BlockView = ({ block, children }: BlockProps) => {
  const isMedia = ['IMAGE', 'VIDEO'].includes(block.type);
  const note = useSelector<RootState, Note | null>(noteSelectors.current);

  return <div
    className={`${styles.block} rounded-lg outline-dashed outline-offset-4 outline-cyan-100 bg-teal-50 flex flex-row `}>
    {
      isMedia ? <div className='basis-96 m-4 truncate'>
          {block.type === 'IMAGE' ?
            <Image src={block.content} alt={'image'} /> :
            <Video src={block.content} />}
        </div> :
        note ? <div className='basis-96 m-2 my-8'>
            <div className='w-96'><NoteLink note={note} isActive={false} /></div>
          </div> :
          <div className='basis-96 m-4 truncate' dangerouslySetInnerHTML={{ __html: block.content }} />
    }
    {children}
  </div>;
};
