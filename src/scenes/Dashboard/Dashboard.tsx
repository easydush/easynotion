import { useDispatch } from 'react-redux';
import { useState } from 'react';
import cuid from 'cuid';
import { create } from 'store/actions/note';
import { NoteForm } from '../../forms/NoteForm';


export const Dashboard = () => {

  return <div>
    <NoteForm />
  </div>;
};
