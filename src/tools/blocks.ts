import { Block } from 'types';

export const compareBlocks = (a: Block, b: Block): number => {
  return a.order - b.order;
};

export const reorderBlocks = (blocks: Block[]): Block[] => {
  return Object.entries(blocks.sort(compareBlocks)).map((item, index) => {
    return {
      ...item[1],
      order: index,
    };
  });
};
