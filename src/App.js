import './App.css';
import List from './List';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [editTodoIndex, setEditTodoIndex] = useState([null]);

const onAdd = (text) => {setList([...list, text]) 
  setText('')
};

const onDeleteAll = () => {
  setList([])
}

const onDelete = (indexToDelete) => {
  console.log ("From onDelete");
  const newList = list .filter((value, index) => {
    return indexToDelete !== index;
  });
  setList(newList);
}
  const onEdit = (indexToEdit) => {
    setEditTodoIndex(indexToEdit);
  }

const onUpdate = (index, newValue) => {
  const newList=[...list];
  newList[index] = newValue;
  setList(newList);
}

  return (
    <div className="App">

      <List text={text} setText={setText} onAdd={onAdd} onDeleteAll={onDeleteAll} />
      <Form list={list} editTodoIndex={editTodoIndex} onDelete={onDelete} onEdit={onEdit} onUpdate={onUpdate} setEditTodoIndex={setEditTodoIndex}/>
      
    </div>
  );
}

export default App;
