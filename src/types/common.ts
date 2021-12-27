import { Block, Note } from './note';

export type VoidFn = () => void
export type VoidWithArgsFn = (args: any) => void

export interface NoteState {
  notes: Note[];
}

export interface BlockState {
  blocks: Block[];
}

export interface UIState {
  flows: string[];
  currentNoteId: Note['id'] | null;
}

export interface RootState {
  note: NoteState;
  ui: UIState;
  block: BlockState;
}
