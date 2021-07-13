import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { Note } from '../App';

interface IProps {
  onAdd: (note: Note) => void;
}

const CreateArea: React.FC<IProps> = ({ onAdd }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setNote({
      ...note,
      [e.target.name]: [e.target.value],
    });
  };

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    onAdd(note);
    setNote({
      title: '',
      content: '',
    });
  };

  const expand = (): void => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitHandler}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
