import { useState } from "react"

type Todo = {
  id: number
  text: string
  completed: boolean
}

function TodoInput() {
  const [textInput, setTextInput] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo() {
    if (!textInput.trim()) return

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: textInput,
        completed: false
      }
    ])

    setTextInput("")
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  return (
    <div className="container-todo">
      <div className="todo-input-container">
        <label htmlFor="todo-input">To Do:</label>

        <input
          id="todo-input"
          className="to-do-input"
          type="text"
          placeholder="Tambahkan tugas..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />

        <button className="add-button" onClick={addTodo}>
          Tambah
        </button>
      </div>

      <div className="todo-list">
        <ol>
          {todos.map(todo => (
            <li key={todo.id}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#6b7280" : "#1f2937"
                  }}
                >
                  {todo.text}
                </span>
              </div>

              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default TodoInput
