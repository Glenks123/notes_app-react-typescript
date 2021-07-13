import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {
  key: number;
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void[];
}

const Note: React.FC<IProps> = ({ id, title, content, onDelete }) => {
  const handleDelete = (): void => {
    onDelete(id);
  };

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
