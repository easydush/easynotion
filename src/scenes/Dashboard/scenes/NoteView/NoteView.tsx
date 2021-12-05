import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockView } from './components';
import { Block, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button } from 'components';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>((state) => state.block.blocks.filter((item) => item.noteId === noteId));

  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [isActiveCreate, setActive] = useState(false);

  const handleClick = () => setActive(true);


  const handleFinish = (note: Note) => {
  };


  return <>
    <Button label={'Add new block'} onClick={handleClick} />
    {isActiveCreate &&
    (<>
      <TypeSwitcher onChange={setType} defaultValue={type} />
      <BlockForm type={type as MediaType} noteId={noteId} />
    </>)
    }
    {blocks.map((block) => <BlockView block={block} />)}
  </>;
};
