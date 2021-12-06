import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockView } from './components';
import { Block, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button } from 'components';
import { create } from 'store/actions/block';
import cuid from 'cuid';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>((state) => state.block.blocks.filter((item) => item.noteId === noteId));

  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [isActiveCreate, setActive] = useState(false);

  const handleClick = () => setActive(true);


  const handleFinish = (content: string) => {
    dispatch(create({ id: cuid(), noteId: noteId, type: type as MediaType, content: content, order: 0 }));
  };


  return <>
    <Button label={'Add new block'} onClick={handleClick} />
    {isActiveCreate &&
    (<>
      <TypeSwitcher onChange={setType} defaultValue={type} />
      <BlockForm type={type as MediaType} onFinish={handleFinish}/>
    </>)
    }
    {blocks.map((block) => <BlockView block={block} />)}
  </>;
};
