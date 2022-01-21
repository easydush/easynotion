import { Block, Note } from 'types';

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

export const calcBlockOrder = (blocks: Block[], noteId: Note['id']) => blocks.filter((block: Block) => block.noteId === noteId).length;
export const filterBlocksByNoteId = (blocks: Block[], noteId: Note['id']) => blocks.filter((block: Block) => block.noteId === noteId);
export const excludeBlocks = (blocks: Block[], ids: Block['id'][]) => blocks.filter((block: Block) => !ids.includes(block.id));
export const excludeBlocksByNoteId = (blocks: Block[], noteId: Note['id']) => blocks.filter((block: Block) => block.noteId !== noteId);
export const findBlockById = (blocks: Block[], id: Block['id']) => blocks.find((item: Block) => item.id === id);
export const findBlockByOrder = (blocks: Block[], order: Block['order']) => blocks.find(item => item.order === order);
