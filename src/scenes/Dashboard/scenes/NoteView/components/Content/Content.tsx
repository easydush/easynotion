import { FC } from 'react';
import { Block, Note, RootState } from 'types';
import { Image, NoteLink, Video } from 'components';
import { useSelector } from 'react-redux';
import { noteSelectors } from 'store/selectors';

type ContentProps = {
  block: Block;
}

export const Content: FC<ContentProps> = ({ block }) => {
  const isMedia = ['IMAGE', 'VIDEO'].includes(block.type);
  const note = useSelector<RootState, Note | undefined>(noteSelectors.byId(block.content));

  return (
    isMedia ? <div className='basis-96 m-4 truncate'>
        {block.type === 'IMAGE' ?
          <Image src={block.content} alt={'image'} /> :
          <Video src={block.content} />}
      </div> :
      note ? <div className='basis-96 m-2 my-8'>
          <div className='w-96'><NoteLink note={note} /></div>
        </div> :
        <div className='basis-96 m-4 truncate' dangerouslySetInnerHTML={{ __html: block.content }} />);
};
