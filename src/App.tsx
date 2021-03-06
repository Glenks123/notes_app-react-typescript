import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';

export interface IState {
  notes: {
    title: string;
    content: string;
  }[];
}

export interface Note {
  title: string;
  content: string;
}

function App() {
  const [notes, setNotes] = useState<IState['notes']>([]);

  useEffect(() => {
    const data = localStorage.getItem('my-notes');
    if (data) {
      setNotes(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('my-notes', JSON.stringify(notes));
  });

  const onAdd = (note: Note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  const onDelete = (id: number): void[] => [
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    }),
  ];

  return (
    <div>
      <Header />
      <div className="App">
        <CreateArea onAdd={onAdd} />
        <List notes={notes} onDelete={onDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
