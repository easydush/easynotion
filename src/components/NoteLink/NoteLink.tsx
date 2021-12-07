import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Note, RootState, VoidWithArgsFn } from '../../types';
import { convert2SelectOption } from './tools';
import Select from 'react-select';
import { NoteLinkButton } from '../NoteLinkButton';


interface NoteInputProps {
  onChange: VoidWithArgsFn;
  initialContent?: any;
}

export const NoteLink = ({ onChange }: NoteInputProps) => {
  const notes = useSelector<RootState, Note[]>((state) => state.note.notes || []);
  const options = convert2SelectOption(notes);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
    onChange(()=><NoteLinkButton noteId={option?.value as Note['id']}/>);
  };

  return (
    <Select
      defaultValue={selectedOption}
      onChange={handleChange}
      options={options}
    />
  );
};
