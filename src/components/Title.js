import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const uygulamaninStatei = useSelector((state) => state);

  return (
    <div className="text-center form-control">
      <h1>TODO APP</h1>
      <h4>Kayıtlı todo sayısı: {uygulamaninStatei.todosState.todos.length}</h4>
    </div>
  );
};

export default Title;
