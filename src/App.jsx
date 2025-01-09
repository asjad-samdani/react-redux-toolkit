import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
  return (
    <>
      <div className="text-center text-3xl m-5  font-bold">TODOS</div>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
