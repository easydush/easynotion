import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockView } from './components';
import { Block, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button } from 'components';
import { create, remove, update } from 'store/actions/block';
import cuid from 'cuid';

type NoteProps = {
  noteId: Note['id'];
}

export const NoteView = ({ noteId }: NoteProps) => {
  const blocks = useSelector<RootState, Block[]>((state) => state.block.blocks.filter((item) => item.noteId === noteId));

  const dispatch = useDispatch();

  const [type, setType] = useState('TEXT');
  const [isActiveBlockForm, setActive] = useState(false);
  const [currentBlock, setBlock] = useState<Block>();

  const showBlockForm = () => setActive(true);


  const handleFinish = (content: string) => {
    if (currentBlock?.id){
      dispatch(update({ id: currentBlock.id, noteId: currentBlock.noteId, type: currentBlock.type as MediaType, content: content, order: 0 }));
    }
    else{
      dispatch(create({ id: cuid(), noteId: noteId, type: type as MediaType, content: content, order: 0 }));
    }
    setActive(false);
  };

  const handleDelete = (id: Block['id']) => {
    dispatch(remove(id))
  };

  const handleEdit = (block: Block) => {
    setBlock(block);
    showBlockForm();
  }


  return <>
    <Button label={'Add new block'} onClick={showBlockForm} />
    {isActiveBlockForm &&
    (<>
      <TypeSwitcher onChange={setType} defaultValue={type} />
      <BlockForm type={type as MediaType} onFinish={handleFinish} initialData={currentBlock} />
    </>)
    }
    {blocks.map((block) =>
      <>
        <BlockView block={block} />
        <Button label={'Edit'} onClick={() => handleEdit(block)} />
        <Button label={'Delete'} onClick={() => handleDelete(block.id)} />
      </>)
    }
  </>;
};
