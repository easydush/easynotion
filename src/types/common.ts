import { Block, Note } from './note';
import { FLOWS } from 'constants/flows';

export type VoidFn = (args: any) => void;

export interface NoteState {
  notes: Note[];
  currentNote: Note | null;
}

export interface BlockState {
  blocks: Block[];
  currentBlock: Block | null;
}

export interface UIState {
  flows: FLOWS[];
}

export interface RootState {
  note: NoteState;
  ui: UIState;
  block: BlockState;
}
