import React from "react";
import { useSelector } from "react-redux";

const ListTodos = () => {
  const uygulamaninStatei = useSelector((state) => state);
  console.log(uygulamaninStatei);
  return (
    <div>
      {uygulamaninStatei.todosState.todos.length === 0 && (
        <p>Henüz Kayıtlı Bir Todo Yok</p>
      )}
      {uygulamaninStatei.todosState.todos.length > 0 && (
        <>
          {uygulamaninStatei.todosState.todos.map((todo) => (
            <h1>{todo.text}</h1>
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
