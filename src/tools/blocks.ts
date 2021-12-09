import { Block } from 'types';

export const compareBlocks = (a: Block, b: Block): number => {
  return a.order - b.order;
};
