function Todo({ todo, index, remove }) {
    function handleRemove() {
      remove(index);
    }
  
    return (
      <div className="todo">
        {todo.text}
        <div>
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    );
  }