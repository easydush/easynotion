import { CREATE_BLOCK, UPDATE_BLOCK, DELETE_BLOCK, REORDER } from '../types/block';
import { DefaultActionParams } from '../types';
import { Block } from 'types';
import { reorderBlocks } from '../../tools/blocks';

const initialState = {
  blocks: [],
};

export const blockReducer = (state = initialState, action: DefaultActionParams) => {
    switch (action.type) {
      case CREATE_BLOCK:
        return {
          ...state,
          blocks: [...state.blocks, {
            ...action.payload,
            order: state.blocks.filter((block: Block) => block.noteId === action.payload.noteId).length,
          }],
        };

      case UPDATE_BLOCK:
        return {
          ...state,
          blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload.id), { ...action.payload }],
        };

      case DELETE_BLOCK:
        return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload)] };

      case REORDER:
        return {
          ...state,
          blocks: [...state.blocks.filter((block: Block) => block.noteId !== action.payload),
            ...reorderBlocks(state.blocks.filter((block: Block) => block.noteId === action.payload)),
          ],
        };

      default:
        return state;
    }
  }
;
;
;
