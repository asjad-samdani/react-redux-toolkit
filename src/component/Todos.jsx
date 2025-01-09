import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="mt-8">
      <h2 className="text-center text-3xl font-bold text-gray-500 mb-6">
        Todos
      </h2>
      <ul className="max-w-md mx-auto space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-900 text-gray-100 px-4 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="text-lg font-medium">{todo.text}</span>
            {/* Delete todos */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="flex items-center justify-center text-red-500 bg-red-100 w-10 h-10 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            {/* update todos */}

            <button
              onClick={() => dispatch(updateTodo(todo.id))}
              className="flex items-center justify-center text-red-500 bg-red-100 w-10 h-10 rounded-full hover:bg-red-500 hover:text-white transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 3.487a2.25 2.25 0 00-3.182 0l-8.71 8.71a4.5 4.5 0 00-1.11 1.878l-.745 2.98a.75.75 0 00.917.917l2.98-.745a4.5 4.5 0 001.878-1.11l8.71-8.71a2.25 2.25 0 000-3.182zm-6.478 7.53l3.182 3.182m2.649-8.155l2.343 2.343"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
