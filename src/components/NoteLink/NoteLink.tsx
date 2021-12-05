import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note, RootState, VoidWithArgsFn } from '../../types';
import { convert2SelectOption } from './tools';
import Select from 'react-select';


interface NoteInputProps {
  onChange: VoidWithArgsFn;
}

export const NoteLink = ({ onChange }: NoteInputProps) => {
  const notes = useSelector<RootState, Note[]>((state) => state.note.notes || []);
  const options = convert2SelectOption(notes);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    onChange(selectedOption);
  };

  return (
    <Select
      defaultValue={null}
      onChange={handleChange}
      options={options}
    />
  );
};
