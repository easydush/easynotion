import { CREATE, UPDATE, DELETE } from '../types/note';
import { DefaultActionParams } from '../types';
import { Block } from 'types';

const initialState = {
  blocks: [],
};

export const blockReducer =  (state = initialState, action: DefaultActionParams) => {

  switch (action.type) {

    case CREATE:
      return { ...state, blocks: [...state.blocks, {...action.payload}] };

    case UPDATE:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload.id), {...action.payload}] };

    case DELETE:
      return { ...state, blocks: [...state.blocks.filter((block: Block) => block.id !== action.payload)] };

    default:
      return state;
  }
}
