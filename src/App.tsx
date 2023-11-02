import { Provider as ReduxProvider } from "react-redux";

import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { store } from "./store";

import "./styles/global.css";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
