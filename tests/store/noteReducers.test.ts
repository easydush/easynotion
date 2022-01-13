import { noteReducer } from 'store/reducers';

const initialState = {
  notes: [],
  currentNote: null,
};

const noteA = {
  id: '1',
  title: 'note A',
  parentId: '',
  uri: 'note1',
};

test('should return the initial state', () => {
  expect(noteReducer(undefined, { type: '', payload: { id: noteA.id, note: noteA } })).toEqual(
    initialState);
});

test('should add note', () => {
  expect(noteReducer(initialState, { type: 'CREATE_NOTE', payload: { id: noteA.id, note: noteA } })).toEqual(
    { ...initialState, notes: [noteA] });
});
