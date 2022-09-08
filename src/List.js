function List(props) {
return (
    <>
    <h1>Todo List</h1>
    <input type={"text"} placeholder="Type your todo here" value={props.text} onChange={(e) => props.setText(e.target.value)}/>
    <button value={props.text} onClick={() => {props.onAdd(props.text)} }>Add</button>
    <button onClick={(e) => {props.onDeleteAll()}}>DeleteAll</button>
    </>
);
};

export default List;