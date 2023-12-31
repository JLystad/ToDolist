function App() {
    const [todos, setTodos] = React.useState([
      {
        text: "learn react",
        isCompleted: false,
      },
      {
        text: "build todo app",
        isCompleted: false,
      },
    ]);
  
    const addTodo = (text) => {
      const newTodos = [...todos, { text, isCompleted: false }];
      setTodos(newTodos);
    };
  
    const removeTodo = (index) => {
      let temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
    };
  
    const markAsDone = (index) => {
      const updatedTodos = [...todos];
      updatedTodos[index].isCompleted = true;
      setTodos(updatedTodos);
    };
  
    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Todo
              key={i}
              index={i}
              todo={todo}
              remove={removeTodo}
              markAsDone={markAsDone}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));