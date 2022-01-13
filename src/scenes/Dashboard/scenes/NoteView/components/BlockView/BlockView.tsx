import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Block, Note, RootState } from 'types';
import { Video, Image, NoteLink } from 'components';
import { noteSelectors } from 'store/selectors';

import styles from './BlockView.module.scss';

type BlockProps = {
  block: Block;
  children: ReactElement;
}

export const BlockView: FC<BlockProps> = ({ block, children }) => {
  const isMedia = ['IMAGE', 'VIDEO'].includes(block.type);
  const note = useSelector<RootState, Note | undefined>(noteSelectors.byId(block.content));

  return <div
    className={`${styles.block} rounded-lg outline-dashed outline-offset-4 outline-cyan-100 bg-teal-50 flex flex-row `}>
    {
      isMedia ? <div className='basis-96 m-4 truncate'>
          {block.type === 'IMAGE' ?
            <Image src={block.content} alt={'image'} /> :
            <Video src={block.content} />}
        </div> :
        note ? <div className='basis-96 m-2 my-8'>
            <div className='w-96'><NoteLink note={note} /></div>
          </div> :
          <div className='basis-96 m-4 truncate' dangerouslySetInnerHTML={{ __html: block.content }} />
    }
    {children}
  </div>;
};
