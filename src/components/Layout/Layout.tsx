import { FC } from 'react';
import { Header } from 'components';
import { NotesTree, Controls } from './components';

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5">
        <Controls />
        <NotesTree />
      </div>
      <div className="basis-4/5">
        <div className="px-2">
          <Header />
        </div>
        <div className="px-2">{children}</div>
      </div>
    </div>
  );
};
