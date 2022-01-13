import { Block, BlockState, Note } from 'types';
import { BLOCK_ACTIONS } from 'store/constants';
import {
  calcBlockOrder,
  excludeBlocks,
  excludeBlocksByNoteId,
  filterBlocksByNoteId, findBlockById, findBlockByOrder,
  reorderBlocks,
} from 'tools/blocks';

const initialState = {
  blocks: [],
};

type BlockActionParams = {
  type: string,
  payload: {
    id: Block['id'],
    noteId: Note['id'],
    block: Block,
    up: boolean,
  }
}

export const blockReducer = (state: BlockState = initialState, action: BlockActionParams) => {
  switch (action.type) {
    case BLOCK_ACTIONS.CREATE_BLOCK:
      return {
        ...state,
        blocks: [...state.blocks, {
          ...action.payload.block,
          order: calcBlockOrder(state.blocks, action.payload.noteId),
        }],
      };

    case BLOCK_ACTIONS.UPDATE_BLOCK:
      return {
        ...state,
        blocks: [...excludeBlocks(state.blocks, [action.payload.block.id]), action.payload.block],
      };

    case BLOCK_ACTIONS.DELETE_BLOCK:
      return { ...state, blocks: excludeBlocks(state.blocks, [action.payload.id]) };

    case BLOCK_ACTIONS.DELETE_NOTE_BLOCKS:
      return { ...state, blocks: excludeBlocksByNoteId(state.blocks, action.payload.noteId) };

    case BLOCK_ACTIONS.REORDER_BLOCKS: {
      return {
        ...state,
        blocks: [...excludeBlocksByNoteId(state.blocks, action.payload.noteId),
          ...reorderBlocks(filterBlocksByNoteId(state.blocks, action.payload.noteId)),
        ],
      };
    }

    case BLOCK_ACTIONS.MOVE_BLOCK: {
      const block = findBlockById(state.blocks, action.payload.id);

      if (block) {
        const newOrder = action.payload.up ? block.order - 1 : block.order + 1;
        const nearbyBlock = findBlockByOrder(state.blocks, block.noteId, newOrder);

        if (nearbyBlock)
          return {
            ...state,
            blocks: [...excludeBlocks(state.blocks, [block.id, nearbyBlock.id]),
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

