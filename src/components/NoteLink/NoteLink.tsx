import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note, RootState } from '../../types';
import { convert2SelectOption } from './tools';
import Select from 'react-select';


interface NoteInputProps {
}

export const NoteLink = ({}: NoteInputProps) => {
  const notes = useSelector<RootState, Note[]>((state) => state.note.notes || []);
  const options = convert2SelectOption(notes);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange=(option: any)=>{
    setSelectedOption(option)
  }

  return (
    <Select
      defaultValue={null}
      onChange={handleChange}
      options={options}
    />
  );
};
