import { useState } from "react";
import css from "./Select.module.css";

const SelectForAddTask = (props) => {
  const { tasks, changeTask, changedReadyValue } = props;

  return (
    <select
      className={css.select}
      value={changedReadyValue}
      onChange={(e) => changeTask(e.target.value)}
    >
      {tasks.map((task) => {
        return <option value={task.title}>{task.title}</option>;
      })}
    </select>
  );
};

export default SelectForAddTask;
