import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../../store/actions/note';
import cuid from 'cuid';
import { ImageInput, LinkInput, VideoInput } from '../../components';
import { Editor } from '@tinymce/tinymce-react';

type NoteFormProps = {
  onCreate?: ()=>{}
}
export const NoteForm = ({}: NoteFormProps) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    dispatch(create({ title: text, id: cuid() }));
    e.target.userInput.value = '';
  }
  return <form onSubmit={handleFormSubmit}>
    <div>Title:</div>
    <input
      type='text'
      name='userInput'
      onChange={(e) => setText(e.target.value)}
    />
    <div>Add image link:</div>
    <ImageInput onLoad={()=>{}} />
    <div>Add video link:</div>
    <VideoInput onLoad={()=>{}} />
    <div>Add link:</div>
    <LinkInput onLoad={()=>{}} />
    <div>Add text:</div>
    <Editor />
    <button type='submit'>Add</button>
  </form>;
};

