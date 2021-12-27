import { Block, BlockState } from 'types';
import { DefaultActionParams } from 'store/types';
import { BLOCK_ACTIONS } from 'store/constants';
import { reorderBlocks } from 'tools/blocks';

const initialState = {
  blocks: [],
};

export const blockReducer = (state: BlockState = initialState, action: DefaultActionParams) => {
  switch (action.type) {
    case BLOCK_ACTIONS.CREATE_BLOCK:
      return {
        ...state,
        blocks: [...state.blocks, {
          ...action.payload,
          order: state.blocks.filter((block: Block) => block.noteId === action.payload.noteId).length,
        }],
      };

    case BLOCK_ACTIONS.UPDATE_BLOCK:
      return {
        ...state,
        blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload.id), { ...action.payload }],
      };

    case BLOCK_ACTIONS.DELETE_BLOCK:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload)] };

    case BLOCK_ACTIONS.DELETE_NOTE_BLOCKS:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.noteId !== action.payload)] };

    case BLOCK_ACTIONS.REORDER: {
      return {
        ...state,
        blocks: [...state.blocks.filter((block: Block) => block.noteId !== action.payload),
          ...reorderBlocks(state.blocks.filter((block: Block) => block.noteId === action.payload)),
        ],
      };
    }

    case BLOCK_ACTIONS.MOVE: {
      const block = state.blocks.find((item: Block) => item.id === action.payload.id);
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
};

