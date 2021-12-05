import { CREATE_BLOCK, UPDATE_BLOCK, DELETE_BLOCK } from '../types/block';
import { DefaultActionParams } from '../types';
import { Block } from 'types';

const initialState = {
  blocks: [],
};

export const blockReducer =  (state = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case CREATE_BLOCK:
      return { ...state, blocks: [...state.blocks, {...action.payload}] };

    case UPDATE_BLOCK:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload.id), {...action.payload}] };

    case DELETE_BLOCK:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload)] };

    default:
      return state;
  }
}
