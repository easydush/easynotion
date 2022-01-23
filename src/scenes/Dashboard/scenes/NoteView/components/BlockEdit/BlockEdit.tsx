import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cuid from 'cuid';
import { Block, MediaType, Note } from 'types';
import { FLOWS } from 'constants/flows';
import { BlockForm } from 'forms/BlockForm';
import { clearCurrentBlock, createBlock, deactivateFlow, updateBlock } from 'store/actions';

type BlockEditProps = {
  block?: Block;
  noteId: Note['id'];
  type: MediaType;
}

export const BlockEdit: FC<BlockEditProps> = ({ block, noteId, type }) => {
  const dispatch = useDispatch();

  const handleFinish = useCallback((content: string) => {
    if (block?.id) {
      dispatch(updateBlock({
        ...block,
        content,
      }));
    } else {
      dispatch(createBlock({ id: cuid(), noteId, type, content }));
    }
  }, [block, dispatch, type, noteId]);

  const handleCancel = useCallback(() => {
    dispatch(deactivateFlow(FLOWS.EDIT_BLOCK));
    dispatch(clearCurrentBlock());
  }, [dispatch]);

  return <BlockForm type={(block?.type ?? type) as Exclude<MediaType, 'LINK'>} onFinish={handleFinish}
                    onCancel={handleCancel} initialData={block} />;
};
