import React, {useState, useCallback, useEffect} from "react";

const List = () => {

    //lo q introduce el usuario
    const [newTodo, setnewTodo] = useState ('');

    //todos we have
    const [todos, setTodos] = useState([]);
    

    const onNewTodoChange = useCallback((event)=>{
        //console.log(event.target.value);
        setnewTodo(event.target.value);
    }, []);
    
    //submit
    const formSubmitted =useCallback ((event) => {
        event.preventDefault();
        if(!newTodo.trim()) return;
        setTodos([
            ...todos,
            {
                //value q ponemos en el array nuevo //caract. objeto
                id: todos.length + 1,
                content: newTodo,
                done: false,
            }
        ]);
        //vaciamos input una vez se introduce el nuevo value
        setnewTodo('');
    }, [newTodo, todos]);
    

//preventing q aparezca el logueo todo el rato
    useEffect (()=>{
console.log('todos', todos)
    }, [todos])

    //button remove
    const removeTodo = useCallback((todo) => (event) => {
        setTodos(todos.filter(otherTodo => otherTodo!= todo));
    }, [todos]);
    
    
        return (
            <div className="container col-12 mb-3 text-center">
                <div className="row">
                    <div className="col-12 p-2">
                            <label>my ToDo list</label>
                            <form className="form" onSubmit={formSubmitted}>
                                <input
                                id="newTodo"
                                name="newTodo"
                                placeholder="what needs to be done...?"
                                autoComplete="off"
                                value={newTodo}
                                onChange={onNewTodoChange}
                                />
                                <button id="button1"><strong>Got it!</strong></button>
                                </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3 mt-3 text-center">
                        <ul>
                            {todos.map((todo)=>(
                                <p key={todo.id}>
                                        <span className={todo}>
                                            {todo.content}</span>
                                    <button id="button2" onClick={removeTodo(todo)}>X</button>
                                </p>
                            ))}
                        </ul>
                    </div>
                </div>
                    <div className="row">
                        <div className="position-absolute bottom-0 end-0">
                            <p id="length"><strong>{todos.length}</strong> ToDo's left</p>
                    </div>
                </div>
            </div>
        );

};

export default List;

