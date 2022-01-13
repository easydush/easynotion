import { calcBlockOrder, compareBlocks, reorderBlocks } from 'tools/blocks';
import { MediaType } from 'types';

const blockA = {
  id: '0',
  noteId: '1',
  order: 0,
  type: MediaType.TEXT,
  content: 'content',
};

const blockB = {
  id: '1',
  noteId: '1',
  order: 3,
  type: MediaType.TEXT,
  content: 'content',
};

const blocks = [blockA, blockB];

test('compareBlocks', () => {
  expect(compareBlocks(blockA, blockB)).toBeLessThan(0);
});

test('reorderBlocks', () => {
  const reordered = reorderBlocks(blocks);
  expect(reordered.sort(compareBlocks)[reordered.length - 1]?.order).toBe(reordered.length - 1);
});

test('calcBlockOrder', () => {
  expect(calcBlockOrder(blocks, '1')).toBe(blocks.length);
});

