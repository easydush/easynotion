import { CREATE_BLOCK, UPDATE_BLOCK, DELETE_BLOCK, REORDER, MOVE, DELETE_NOTE_BLOCKS } from '../types/block';
import { DefaultActionParams } from '../types';
import { Block, BlockState } from 'types';
import { reorderBlocks } from '../../tools/blocks';

const initialState = {
  blocks: [],
};

export const blockReducer = (state: BlockState = initialState, action: DefaultActionParams) => {
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

      case DELETE_NOTE_BLOCKS:
        return { ...state, blocks: [...state.blocks.filter((block: Block) => block.noteId !== action.payload)] };

      case REORDER:
        return {
          ...state,
          blocks: [...state.blocks.filter((block: Block) => block.noteId !== action.payload),
            ...reorderBlocks(state.blocks.filter((block: Block) => block.noteId === action.payload)),
          ],
        };

      case MOVE: {
        const block = state.blocks.find((item: Block) => item.id === action.payload.id);
        console.log(block);
        if (block) {
          const newOrder = action.payload.up ? block.order - 1 : block.order + 1;
          const nearbyBlock = state.blocks.find(block => block.order === newOrder);

          return {
            ...state,
            blocks: [...state.blocks.filter((item: Block) => item.id !== block.id && item.id !== nearbyBlock?.id),
              {
                ...nearbyBlock,
                order: block.order,
              },
              {
                ...block,
                order: newOrder,
              }],
          };
        }
        return state;
      }
      default:
        return state;
    }
  }
;
