import { Block, Note, Section } from './note';

export type VoidFn = () => void
export type VoidWithArgsFn = (args: any) => void

export interface NoteState {
  notes: Note[];
}

export interface SectionState {
  sections: Section[];
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
  section: SectionState;
}
