import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cuid from 'cuid';
import { Block, MediaType, Note } from 'types';
import { BlockForm } from 'forms/BlockForm';
import { FLOWS } from 'constants/flows';
import {
  clearCurrentBlock,
  createBlock,
  deactivateFlow,
  updateBlock,
} from 'store/actions';

type BlockEditProps = {
  block?: Block;
  noteId: Note['id'];
  type: MediaType;
};

export const BlockEdit: FC<BlockEditProps> = ({ block, noteId, type }) => {
  const dispatch = useDispatch();

  const handleClear = useCallback(() => {
    dispatch(deactivateFlow(FLOWS.EDIT_BLOCK));
    dispatch(deactivateFlow(FLOWS.ADD_BLOCK));
    dispatch(clearCurrentBlock());
  }, [dispatch]);

  const handleFinish = useCallback(
    (content: string) => {
      if (content) {
        if (block?.id) {
          dispatch(
            updateBlock({
              ...block,
              content,
            }),
          );
        } else {
          dispatch(createBlock({ id: cuid(), noteId, type, content }));
        }
      }
      handleClear();
    },
    [block, dispatch, type, noteId, handleClear],
  );

  return (
    <BlockForm
      type={(block?.type ?? type) as MediaType}
      onFinish={handleFinish}
      initialData={block}
    />
  );
};
