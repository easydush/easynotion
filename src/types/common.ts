import { Block, Note } from './note';

export type VoidFn = (args: any) => void

export interface NoteState {
  notes: Note[];
  currentNote: Note | null;
}

export interface BlockState {
  blocks: Block[];
}

export interface UIState {
  flows: string[];
}

export interface RootState {
  note: NoteState;
  ui: UIState;
  block: BlockState;
}
