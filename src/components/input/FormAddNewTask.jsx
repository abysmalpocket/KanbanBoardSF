import clsx from "clsx";
import css from "./Form.module.css";

import { useState } from "react";

const FormAddNewTask = (props) => {
  const { setInputVisible, createdBacklogTask } = props;
  const [values, setValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const fielName = e.target.name;
    setValues({ ...values, [fielName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      createdBacklogTask(values.title);
    }
    setInputVisible(false);
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        id="taskTitle"
        name="title"
        type="text"
        placeholder="Name"
        value={values.title}
        onChange={handleChange}
      />
      <button type="submit" className={css.addButtonSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormAddNewTask;
