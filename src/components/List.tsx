import React from 'react';
import Note from './Note';
import { IState as Props } from '../App';

interface IProps {
  notes: Props['notes'];
  onDelete: (id: number) => void[];
}

const List: React.FC<IProps> = ({ notes, onDelete }) => {
  const renderList = (): JSX.Element[] => {
    return notes.map((note, index) => {
      return (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      );
    });
  };

  return <h1>{renderList()}</h1>;
};

export default List;
