import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentNote } from 'store/actions';

export const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentNote(''));
  }, [dispatch]);

  return <div />;
};
