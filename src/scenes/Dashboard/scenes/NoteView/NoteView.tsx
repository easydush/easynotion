import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockView } from './components';
import { Block, MediaType, Note, RootState } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { TypeSwitcher } from './components/TypeSwitcher/TypeSwitcher';
import { Button } from 'components';
import { create, remove, update } from 'store/actions/block';
import cuid from 'cuid';
import { compareBlocks } from 'tools/blocks';

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
    if (currentBlock?.id) {
      dispatch(update({
        id: currentBlock.id,
        noteId: currentBlock.noteId,
        type: currentBlock.type,
        content: content,
        order: currentBlock.order,
      }));
    } else {
      dispatch(create({ id: cuid(), noteId: noteId, type: type as MediaType, content: content, order: blocks.length }));
    }
    setActive(false);
  };

  const handleMove = (block: Block, up: boolean) => {
    const newOrder = up ? block.order - 1 : block.order + 1;
    const nearbyBlock = blocks.find(block => block.order === newOrder);

    if (nearbyBlock) {
      dispatch(update({
        id: nearbyBlock.id,
        noteId: nearbyBlock.noteId,
        type: nearbyBlock.type,
        content: nearbyBlock.content,
        order: block.order,
      }));

      dispatch(update({
        id: block.id,
        noteId: block.noteId,
        type: block.type,
        content: block.content,
        order: newOrder,
      }));
    }
  };


  const handleDelete = (id: Block['id']) => {
    dispatch(remove(id));
  };

  const handleEdit = (block: Block) => {
    setBlock(block);
    showBlockForm();
  };

  const handleAdd = () => {
    setBlock(undefined);
    showBlockForm();
  };

  const handleMoveUp = (block: Block) => {
    handleMove(block, true);
  };

  const handleMoveDown = (block: Block) => {
    handleMove(block, false);
  };


  return <>
    {!isActiveBlockForm && <Button label={'Add new block'} onClick={handleAdd} />}
    {isActiveBlockForm &&
    (<>
      <TypeSwitcher onChange={setType} />
      {type !== 'LINK' && <BlockForm type={type as Exclude<MediaType, 'LINK'>} onFinish={handleFinish} initialData={currentBlock} />}
    </>)
    }
    {blocks.sort(compareBlocks).map((block) =>
      <>
        <BlockView block={block} />
        {block.order !== 0 && <Button label={'▲'} onClick={() => handleMoveUp(block)} />}
        {block.order < blocks.length - 1 && <Button label={'▼'} onClick={() => handleMoveDown(block)} />}
        <Button label={'Edit'} onClick={() => handleEdit(block)} />
        <Button label={'Delete'} onClick={() => handleDelete(block.id)} />
      </>)
    }
  </>;
};
